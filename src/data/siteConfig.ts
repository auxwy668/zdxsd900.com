// ============================================================
// zdxsd900.com — TG站群 #8 青色主题 · 隐私安全
// ============================================================
export const siteConfig = {
  name: 'zdxsd900',
  title: 'Telegram 隐私安全设置教程：隐身防追踪完整指南',
  description: 'Telegram 隐私安全完整教程，涵盖手机号隐藏、在线状态隐身、两步验证、端到端加密、群组邀请控制等核心安全配置。2026 最新版。',
  keywords: 'Telegram,隐私安全,隐身设置,防追踪,两步验证,加密聊天,账号保护',
  url: 'https://zdxsd900.com',
  language: 'zh-CN',
  author: 'TG安全指南',
  email: 'contact@zdxsd900.com',

  newsFloat: {
    date: '更新日期：2026-06-25',
    label: '新版本更新内容',
    items: [
      '1.端到端加密密聊优化',
      '2.新增设备登录提醒通知',
      '3.群组邀请双重验证上线',
    ],
  },

  logo: {
    text: 'TG隐私安全',
    img: 'TG.svg',
    imgWidth: 200,
    imgHeight: 25,
  },

  downloadButtons: [
    { img: 'window_img.png', btnSvg: 'down.svg', onClick: "window.open('https://telegram.org/')" },
    { img: 'android_img.png', btnSvg: 'down-android.svg', onClick: "window.open('https://telegram.org/')" },
    { img: 'iphone_img.png', btnSvg: 'down-iphone.svg', onClick: "window.open('https://telegram.org/')" },
  ],

  features: [
    { gif: 'img1.gif', title: '隐身', desc: '隐藏手机号和在线状态，保护个人信息' },
    { gif: 'img2.gif', title: '加密', desc: '端到端加密，秘密聊天阅后即焚' },
    { gif: 'img3.gif', title: '防追踪', desc: '阻止转发消息暴露身份和来源' },
    { gif: 'img4.gif', title: '两步验证', desc: '设置密码防账号被盗，安全升级' },
    { gif: 'img5.gif', title: '群组防护', desc: '控制谁可以拉你进群，拒绝骚扰' },
    { gif: 'img6.gif', title: '设备管理', desc: '查看活跃会话，远程注销可疑设备' },
    { gif: 'img7.gif', title: '隐私', desc: '消息经过高度加密，可以自毁' },
    { gif: 'img8.gif', title: '安全', desc: '保护您的消息不受黑客攻击' },
    { gif: 'img9.gif', title: '自主', desc: '完全掌控你的数据与隐私设置' },
  ],

  categories: [
    { id: 'privacy',  name: '隐私设置' },
    { id: 'security', name: '账号安全' },
    { id: 'encrypt',  name: '加密保护' },
    { id: 'guide',    name: '使用指南' },
  ],

  catLabels: {
    privacy: '隐私设置',
    security: '账号安全',
    encrypt: '加密保护',
    guide: '使用指南',
  } as Record<string, string>,

  colors: {
    primary: '#0891B2',
    primaryHover: '#0E7490',
    bg: '#ffffff',
    bgCard: '#f0f9fa',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    featTitle: '#a19679',
    btnBorder: '#ffffff',
  },

  fonts: {
    heading: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
    body: "'Noto Sans SC', 'Inter', system-ui, sans-serif",
  },

  footer: {
    notice: '本站为独立安全教程站点，非 Telegram 官方。所有内容基于公开信息整理。',
  },

  structuredData: {
    organization: 'zdxsd900',
    homepageType: 'WebSite' as 'WebSite' | 'Organization',
  },
};
