## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### 創建新的 React Router 應用程式

要創建一個新的 React Router 應用程式，請使用以下命令：

```bash
npx create-react-router@latest my-react-router-app
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 路由架構

本應用程式的路由定義在 `app/routes.ts` 中。以下是路由結構的概述：

- **頂層路由：**
  - `/about`：渲染 `about.tsx` 的內容。
  
- **儀表板路由（嵌套在 `/dashboard` 之下）：**
  - `/dashboard/home`：渲染儀表板主頁，來自 `dashboard-home.tsx`。
  - `/dashboard/settings`：渲染儀表板設定頁面，來自 `dashboard-settings.tsx`。

這種嵌套路由結構允許應用程式進行模組化組織，其中儀表板擁有自己的子路由，並在其中佈局內渲染。
