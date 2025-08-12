# UniChat - 移动端 Web3 社交应用

<div align="center">
  <strong>基于 Next.js 15 构建的现代化移动端 Web3 社交平台</strong>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-blue" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38bdf8" alt="Tailwind CSS" />
</div>

## 📱 项目简介

UniChat 是一个面向 Web3 生态的移动端优先社交应用，集成了聊天、DeFi工具、NFT交易、空投管理等功能。采用现代化的技术栈和组件化架构，为用户提供流畅的移动端体验。

### ✨ 核心功能

- 🔗 **多链支持** - BNB Chain、Arbitrum 等主流区块链
- 💬 **实时聊天** - 群聊、私聊，支持钱包地址身份
- 🎯 **DeFi 聚合** - Uniswap交换、跨链桥等工具集成
- 🎁 **空投管理** - 一站式空投信息和管理
- 🎮 **链游生态** - 区块链游戏入口和资源
- 🤖 **AI 功能** - 智能助手和AI工具集成
- 👤 **个人中心** - 钱包管理、收藏、设置等

## 🛠️ 技术栈

### 核心框架
- **Next.js 15** - React 全栈框架，使用 App Router
- **React 19** - 最新的 React 版本
- **TypeScript 5.7** - 类型安全的 JavaScript

### UI/样式
- **Tailwind CSS 3.4** - 原子化 CSS 框架
- **shadcn/ui** - 现代化组件库
- **Radix UI** - 无障碍的基础组件
- **Lucide React** - 优雅的图标库

### 开发工具
- **pnpm** - 高效的包管理器
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- pnpm 8+

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd unichat
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

4. **打开浏览器访问**
   ```
   http://localhost:3000
   ```

### 构建生产版本
```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
front-static/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # 主应用路由组
│   │   ├── page.tsx       # 聊天首页
│   │   ├── discover/      # 发现页面
│   │   ├── shop/          # 商店页面
│   │   ├── me/            # 个人中心
│   │   └── layout.tsx     # 仪表板布局
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   └── layout.tsx         # 根布局
├── components/             # 组件库
│   ├── ui/                # shadcn/ui 组件
│   └── icons.tsx          # 自定义图标
├── lib/                   # 工具库
│   ├── utils.ts           # 工具函数
│   ├── auth.ts            # 认证模块
│   └── db.ts              # 数据模拟
└── public/                # 静态资源
    ├── bottom/            # 底部导航图标
    ├── discover/          # 发现页面图标
    ├── shop/              # 商店页面图标
    └── me/                # 个人中心图标
```

## 🎨 设计特色

### 移动端优先
- 底部标签栏导航
- 触摸友好的交互设计
- 响应式布局适配

### 现代化UI
- 卡片式设计语言
- 统一的色彩系统
- 流畅的动画效果
- 支持深色/浅色主题

### Web3 集成
- 钱包连接界面
- 多链网络支持
- DeFi 工具集成
- NFT 展示功能

## 🔧 开发指南

### 添加新页面
在 `app/(dashboard)/` 目录下创建新的文件夹和 `page.tsx` 文件。

### 创建新组件
使用 shadcn/ui CLI 快速添加组件：
```bash
npx shadcn-ui@latest add <component-name>
```

### 样式规范
- 使用 Tailwind CSS 类名
- 遵循 `cn()` 工具函数合并样式
- 保持组件的可复用性

### 类型定义
所有组件和函数都应该有完整的 TypeScript 类型定义。

## 📱 页面功能

### 聊天页面 (`/`)
- 聊天列表展示
- 未读消息计数
- 群聊/私聊区分
- 钱包地址展示

### 发现页面 (`/discover`)
- 功能入口聚合
- Web3 工具导航
- 生态项目展示
- AI 功能集成

### 商店页面 (`/shop`)
- 项目管理工具
- UNISHOP.Ai 集成
- 空投功能入口
- 推广收入管理

### 个人中心 (`/me`)
- 用户信息展示
- 钱包地址管理
- 功能设置入口
- 二维码展示

## 🌐 部署

### Vercel 部署
1. 连接 GitHub 仓库到 Vercel
2. 自动检测 Next.js 项目
3. 一键部署到生产环境

### 其他平台
项目兼容所有支持 Node.js 的托管平台。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE.md](LICENSE.md) 了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 全栈框架
- [shadcn/ui](https://ui.shadcn.com/) - 优秀的组件库
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Radix UI](https://www.radix-ui.com/) - 无障碍组件基础
