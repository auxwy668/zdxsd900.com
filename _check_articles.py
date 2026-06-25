import os, re

articles = [
    'telegram-secret-chat-e2e.md',
    'telegram-self-destruct-message.md',
    'telegram-voice-video-call-encryption.md',
    'telegram-mtproto-proxy.md',
    'telegram-passport-identity.md',
]
base = r'C:\Users\Administrator\.openclaw-autoclaw\workspace\zdxsd900.com\src\content\articles'
for f in articles:
    path = os.path.join(base, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    chinese = len(re.findall(r'[\u4e00-\u9fff]', content))
    desc_m = re.search(r'description:\s*"(.+?)"', content, re.DOTALL)
    desc_len = len(desc_m.group(1)) if desc_m else 0
    faq_count = len(re.findall(r'<details>', content))
    links = re.findall(r'https://zdxsd900\.com/', content)
    link_count = len(links)
    kw_m = re.search(r'keywords:\s*"(.+?)"', content)
    kw_count = len(kw_m.group(1).split(',')) if kw_m else 0
    print(f'{f}: 中文={chinese} | desc={desc_len}字 | FAQ={faq_count} | 内链={link_count} | 关键词={kw_count}')
