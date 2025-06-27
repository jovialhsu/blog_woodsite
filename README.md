# Blog Woodsite - Hsu Web

這是一個從 Gatsby 遷移到 Astro 的個人部落格專案。

## 🚀 專案特色

- ✅ 極簡風格設計
- ✅ 100/100 Lighthouse 效能評分
- ✅ SEO 友善，包含 canonical URLs 和 OpenGraph 資料
- ✅ 網站地圖支援
- ✅ RSS Feed 支援
- ✅ Markdown & MDX 支援
- ✅ React 元件支援

## 📁 專案結構

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro 會尋找 `src/pages/` 目錄中的 `.astro` 或 `.md` 檔案。每個頁面都會根據檔案名稱作為路由。

`src/components/` 目錄放置 Astro/React/Vue/Svelte/Preact 元件。

`src/content/` 目錄包含相關的 Markdown 和 MDX 文件集合。使用 `getCollection()` 從 `src/content/blog/` 取得文章，並使用可選的 schema 進行 frontmatter 類型檢查。

任何靜態資源（如圖片）都可以放在 `public/` 目錄中。

## 🧞 指令

所有指令都在專案根目錄的終端機中執行：

| 指令                      | 動作                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安裝依賴套件                                      |
| `npm run dev`             | 在 `localhost:4321` 啟動本地開發伺服器             |
| `npm run build`           | 建置生產版本到 `./dist/`                          |
| `npm run preview`         | 在部署前預覽建置結果                               |
| `npm run astro ...`       | 執行 CLI 指令，如 `astro add`, `astro check`      |
| `npm run astro -- --help` | 取得 Astro CLI 說明                              |

## 🔄 遷移說明

此專案已從 Gatsby 成功遷移到 Astro：
- 移除了所有 Gatsby 相關檔案和依賴
- 保留了原有的內容和設計
- 更新了建置和開發流程

## 👀 想了解更多？

查看 [Astro 官方文件](https://docs.astro.build) 或加入 [Discord 伺服器](https://astro.build/chat)。

## 致謝

此主題基於優秀的 [Bear Blog](https://github.com/HermanMartinus/bearblog/)。 