import os, re, sys

base = r'C:\Users\Administrator\.openclaw-autoclaw\workspace\zdxsd900.com\src\content\articles'
files = [
    'telegram-privacy-settings-guide.md',
    'telegram-last-seen-online-status.md',
    'telegram-profile-privacy-protection.md',
    'telegram-forward-message-privacy.md',
    'telegram-group-channel-privacy.md',
]

results = []
for fname in files:
    fpath = os.path.join(base, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('---', 2)
    body = parts[2] if len(parts) >= 3 else content
    
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', body))
    
    desc_match = re.search(r'description:\s*"(.+?)"', content)
    desc = desc_match.group(1) if desc_match else 'NOT FOUND'
    desc_len = len(re.findall(r'[\u4e00-\u9fff]', desc))
    
    kw_match = re.search(r'keywords:\s*"(.+?)"', content)
    keywords = kw_match.group(1).split(',') if kw_match else []
    
    faq_qa = len(re.findall(r'<details>', body))
    
    h2_count = len(re.findall(r'^## ', body, re.MULTILINE))
    h3_count = len(re.findall(r'^### ', body, re.MULTILINE))
    
    internal_links = len(re.findall(r'\[.*?\]\(/(.+?)/\)', body))
    
    cover_match = re.search(r'coverImage:\s*"(.+?)"', content)
    cover = cover_match.group(1) if cover_match else 'NOT FOUND'
    
    homepage_link = 'zdxsd900.com' in body
    
    results.append({
        'file': fname,
        'chinese_chars': chinese_chars,
        'desc_chinese': desc_len,
        'keywords': len(keywords),
        'faq_qa': faq_qa,
        'h2': h2_count,
        'h3': h3_count,
        'internal_links': internal_links,
        'cover': cover,
        'homepage_link': homepage_link,
    })

print(f"{'File':<45} {'汉字':<6} {'描述':<6} {'KW':<4} {'FAQ':<4} {'H2':<3} {'H3':<3} {'内链':<4} {'状态'}")
print('-' * 100)
for r in results:
    status = 'PASS' if (3000 <= r['chinese_chars'] <= 5000 and r['desc_chinese'] >= 120 and r['keywords'] >= 5 and r['faq_qa'] >= 3 and r['internal_links'] >= 2 and r['homepage_link']) else 'ISSUE'
    print(f"{r['file']:<45} {r['chinese_chars']:<6} {r['desc_chinese']:<6} {r['keywords']:<4} {r['faq_qa']:<4} {r['h2']:<3} {r['h3']:<3} {r['internal_links']:<4} {status}")

print()
print('=== Detailed Checks ===')
for r in results:
    issues = []
    if r['chinese_chars'] < 3000:
        issues.append('字数不足(3000): {}'.format(r['chinese_chars']))
    if r['chinese_chars'] > 5000:
        issues.append('字数超标(5000): {}'.format(r['chinese_chars']))
    if r['desc_chinese'] < 120:
        issues.append('描述不足(120): {}'.format(r['desc_chinese']))
    if r['keywords'] < 5:
        issues.append('关键词不足(5): {}'.format(r['keywords']))
    if r['faq_qa'] < 3:
        issues.append('FAQ不足(3): {}'.format(r['faq_qa']))
    if r['internal_links'] < 2:
        issues.append('内链不足(2): {}'.format(r['internal_links']))
    if not r['homepage_link']:
        issues.append('缺少首页链接')
    
    comp_status = 'ALL OK' if not issues else 'FAIL: ' + '; '.join(issues)
    print('{}: {}'.format(r['file'], comp_status))
