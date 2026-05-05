# whania-mvc — 经典 MVC 项目骨架

> 基于 Node.js + Express 的 MVC 目录结构，开箱即用。

## 📁 目录结构

```
whania-mvc/
├── models/          # 数据模型层（数据库操作、实体定义）
├── views/           # 视图层（EJS / Pug / HTML 模板）
├── controllers/     # 控制器层（业务逻辑、请求处理）
├── routes/          # 路由配置（URL → Controller 映射）
├── middleware/      # 中间件（鉴权、日志、错误处理）
├── config/          # 配置文件（数据库、环境变量）
├── public/          # 静态资源
│   ├── css/
│   ├── js/
│   └── images/
├── utils/           # 工具函数
└── app.js           # 入口文件
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd whania-mvc
npm init -y
npm install express
```

### 2. 配置环境变量（可选）

在 `config/` 目录下创建 `env.js`：

```js
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/mydb'
};
```

### 3. 添加路由示例

创建 `routes/index.js`：

```js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
module.exports = router;
```

在 `app.js` 中引入：

```js
const routes = require('./routes');
app.use('/', routes);
```

### 4. 创建控制器示例

创建 `controllers/homeController.js`：

```js
exports.index = (req, res) => {
  res.render('home', { title: '首页' });
};
```

### 5. 启动项目

```bash
node app.js
# 访问 http://localhost:3000
```

## 📝 开发约定

| 层级        | 职责                     | 示例文件名          |
|------------|--------------------------|-------------------|
| Models     | 数据结构、ORM/查询        | `userModel.js`    |
| Views      | 页面模板                  | `home.ejs`        |
| Controllers| 接收请求、调用 Model、返回| `homeController.js`|
| Routes     | URL 映射                  | `userRoutes.js`   |
| Middleware | 请求拦截、预处理           | `auth.js`         |

## 🛠️ 可选扩展

- **视图引擎**：`npm install ejs`，然后在 `app.js` 中设置 `app.set('view engine', 'ejs')`
- **数据库**：按需安装 `mongoose` / `sequelize` / `pg`
- **热更新**：`npm install -D nodemon`，启动时用 `npx nodemon app.js`

---
*Created for Whania by 苯宝 🐉*
