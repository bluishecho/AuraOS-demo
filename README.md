# Vibe-Coding 多屏交互原型

这是一个纯静态网页实现（`index.html + style.css + app.js`），已包含 Figma 1~8 屏的可交互流程。

## 交互方式

- 点击页面中的按钮按流程跳转。
- 底部有 `上一屏 / 下一屏` 导航。
- 键盘左右方向键也可切屏。

## 本地预览

直接打开 `index.html` 即可，或在目录启动本地服务：

```bash
python -m http.server 8080
```

访问：`http://localhost:8080`

## 部署到 GitHub Pages

1. 将当前目录推送到 GitHub 仓库。
2. 打开仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 选择 `Deploy from a branch`。
4. 分支选择 `main`（或默认分支），目录选择 `/ (root)`。
5. 保存并等待 1-3 分钟，访问生成的 Pages 链接。
