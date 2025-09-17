# 个人博客 - 部署指南

## 项目简介
这是一个基于Vue 3和TypeScript的个人博客网站，使用Vite作为构建工具。

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 部署到GitHub Pages

### 步骤1: 创建GitHub仓库
1. 在GitHub上创建一个新的仓库，命名为 `personal-blog`（或其他名称）
2. 确保仓库设置为公开（public）

### 步骤2: 配置项目
本项目已经配置了部署所需的设置：
- 在 `vite.config.ts` 中设置了 `base: '/personal-blog/'`（请根据您的实际仓库名称修改）
- 在 `package.json` 中添加了 `gh-pages` 依赖和 `deploy` 脚本

### 步骤3: 初始化Git仓库
如果您的项目尚未初始化Git，请执行以下命令：

```bash
# 初始化Git仓库
git init

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/personal-blog.git

# 添加文件并提交
git add .
git commit -m "Initial commit"

# 推送到GitHub
git push -u origin master
```

### 步骤4: 部署到GitHub Pages
执行以下命令部署项目：

```bash
npm run deploy
```

这个命令会自动执行以下操作：
1. 构建项目（生成dist目录）
2. 使用gh-pages工具将dist目录中的内容部署到GitHub Pages

### 步骤5: 查看部署结果
部署完成后，您可以在GitHub仓库的Settings > Pages页面查看部署状态和访问链接。

通常，访问链接的格式为：`https://YOUR_USERNAME.github.io/personal-blog/`

## 注意事项

1. **base路径配置**
   - 请确保 `vite.config.ts` 中的 `base` 配置与您的GitHub仓库名称完全一致
   - 如果您使用自定义域名，请参考GitHub Pages的相关文档进行配置

2. **部署权限**
   - 首次部署时，gh-pages工具可能会提示您输入GitHub凭据
   - 建议使用GitHub Personal Access Token以获得更安全的访问权限

3. **更新部署**
   - 当您对项目进行修改后，只需再次运行 `npm run deploy` 命令即可更新部署

4. **分支设置**
   - gh-pages工具默认会将内容部署到 `gh-pages` 分支
   - 您可以在GitHub仓库的Pages设置中确认这一点

## 常见问题

### 部署后页面显示空白或资源加载失败
- 检查 `vite.config.ts` 中的 `base` 配置是否正确
- 确认仓库名称与base路径完全匹配
- 检查浏览器控制台是否有错误信息

### 部署命令报错
- 确保您的GitHub凭据正确且有权限访问仓库
- 检查是否已安装所有依赖：`npm install`
- 尝试删除 `node_modules` 和 `package-lock.json` 后重新安装依赖

## 技术栈
- Vue 3
- TypeScript
- Vite
- CSS3

## License
MIT