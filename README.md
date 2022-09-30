# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Directory

| 構成要素 | 説明 |
| ---- | ---- |
| nuxt | コマンドでのビルド結果はここに配置されます。 |
| 　└router.js | pagesディレクトリ配下のファイルに対して、ルーティングの設定を行います。 |
| store | Vuexのストアファイルを配置します。**Nuxt.jsではデフォルトでVuexを読み込んでいます。** |
| static | コンパイルしない静的なファイルを配置します。<br>例：robots.txt等。「/（ルート）」でアクセスすることができます。 |
| plugins | アプリケーションをインスタンス化する前に実行したいJavaScriptプラグインを配置します。 |
| pages | **Nuxt.jsにおいて一番重要なディレクトリ**になります。<br>「ビュー」と「ルーティング」に関する役割を担います。<br>「index.vue」に最初に表示させるページのHTMLを記述する。 |
| package.json | Nuxt.jsで使用するコマンド等を定義します。 |
| nuxt.config.js | 	「コンテキストオブジェクト」への各種設定を行います。 |
| middleware	 | ページをレンダリングする前に実行される関数を定義して配置することができます。 |
| layouts | アプリケーションのレイアウトファイルを入れます。 |
| 　└default.vue | デフォルトのレイアウトファイルになります。 |
| 　└error.vue | エラーページのレイアウトファイルになります。 |
| components | ビューで使用するためのコンポーネントを指定します。<br>**Nuxt.jsの影響下のファイルではなく、Nuxt.jsからは自動で読み込まれないので、ピュアなvueファイルになります。使用しないのであれば削除することが可能です。** |
| assets | LESSやSCSS等のコンパイルされていないファイルを配置します。 |
| README.md | |
| yarn.lock | |
| node_modules | |
