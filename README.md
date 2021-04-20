# vue-basic-template

## 目錄結構

```
├── public                     # 靜態資源
│   ├── favicon.ico            # favicon 圖標
│   └── index.html             # html 模板
├── src                        # 原始碼
│   ├── api                    # 所有請求
│   ├── assets                 # 靜態資源
│   ├── components             # 全局公用组件
│   ├── database               # 全局公用資料庫
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 項目所有 svg icons
│   ├── locales                # 國際化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store 管理
│   ├── styles                 # 全局樣式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用 vendor
│   ├── views                  # views 所有頁面
│   ├── App.vue                # 入口頁面
│   └── main.js                # 入口文件 加載组件 初始化等
├── tests                      # 測試
│   └── e2e                    # E2E 測試
├── .browserslistrc            # 瀏覽器兼容性配置
├── .editorconfig              # 編碼樣式的文件格式配置
├── .env.xxx                   # 環境變數配置
├── .eslintrc.js               # eslint 配置
├── .gitignore                 # git 忽略配置
├── babel.config.js            # babel 配置
├── cypress.json               # cypress 配置
├── jest.config.js             # jest 配置
├── package.json               # package.json
├── README.md                  # 規範說明
└── vue.config.js              # vue-cli 配置
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
