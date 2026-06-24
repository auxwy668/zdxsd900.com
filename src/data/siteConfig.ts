// ============================================================
// zdxsd900.com — TG站群 #8 青色主题
// Telegram 隐私安全设置教程
// ============================================================
export const siteConfig = {
  // ── 基础信息 ──
  name: 'zdxsd900',
  title: 'Telegram 隐私安全设置教程：防追踪隐身保护完整指南 | zdxsd900.com',
  description: 'Telegram 隐私安全完整教程，涵盖隐身设置、防追踪、两步验证、聊天加密、群组权限、联系人隐藏等安全配置。2026最新版，保护你的 TG 账号安全。',
  keywords: 'Telegram,隐私安全,隐身设置,防追踪,两步验证,加密聊天,账号保护,安全设置',
  url: 'https://zdxsd900.com',
  language: 'zh-CN',
  author: 'TG安全指南',
  email: 'contact@zdxsd900.com',

  // ── Hero 区域 ──
  hero: {
    h1: 'Telegram 隐私安全设置教程',
    subtitle: '隐身防追踪指南 · 两步验证配置 · 聊天加密保护 · 账号安全加固',
    buttons: [
      { text: 'Windows 桌面版', href: 'https://telegram.org/', icon: 'window_img.png', external: true },
      { text: 'Android 安卓版教程', href: '/privacy-settings/', icon: 'android_img.png', external: false },
      { text: 'iPhone 苹果版', href: 'https://telegram.org/', icon: 'iphone_img.png', external: true },
    ],
  },

  // ── Features 区域 ──
  features: [
    { icon: 'img1.gif', title: '隐身设置', desc: '隐藏手机号、在线状态和最后上线时间' },
    { icon: 'img2.gif', title: '防追踪', desc: '阻止陌生人和转发消息暴露身份' },
    { icon: 'img3.gif', title: '两步验证', desc: '设置密码防账号被盗，安全升级' },
    { icon: 'img4.gif', title: '加密聊天', desc: '端对端加密，秘密聊天阅后即焚' },
    { icon: 'img5.gif', title: '群组权限', desc: '控制谁可以加你进群，拒绝骚扰' },
    { icon: 'img6.gif', title: '设备管理', desc: '查看活跃会话，远程注销可疑设备' },
  ],

  // ── 配色方案 — 主题8 青色系 ──
  colors: {
    primary: '#0891B2',
    primaryHover: '#0E7490',
    heroGradientTop: '#ecfeff',
    bg: '#f5f7fa',
    bgCard: '#f0f9fa',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    border: '#cffafe',
    featTitle: '#0f766e',
  },

  // ── 字体方案 ──
  fonts: {
    heading: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
    body: "'Noto Sans SC', 'Inter', system-ui, sans-serif",
  },

  // ── 导航 ──
  navLinks: [
    { label: '首页', href: '/' },
    { label: '所有教程', href: '/articles/' },
    { label: '安全设置', href: '/privacy-settings/' },
    { label: '关于', href: '/about/' },
  ],

  // ── 分类 ──
  categories: [] as { id: string; name: string; icon: string }[],

  // ── 页脚 ──
  footer: {
    notice: '本站为独立安全教程站点，非 Telegram 官方。所有内容基于公开信息整理。',
  },

  // ── 分类标签映射 ──
  catLabels: {
    privacy: '隐私设置',
    security: '账号安全',
    encrypt: '加密保护',
    guide: '使用指南',
  } as Record<string, string>,

  // ── 结构化数据 ──
  structuredData: {
    organization: 'zdxsd900',
    homepageType: 'WebSite' as 'WebSite' | 'Organization',
  },
};
