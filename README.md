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

## Directory template

| 構成要素 | 説明 |
| ---- | ---- |
| nuxt | コマンドでのビルド結果はここに配置されます。 |
| 　└router.js | pagesディレクトリ配下のファイルに対して、ルーティングの設定を行います。 |
| store | Vuexのストアファイルを配置します。**Nuxt.jsではデフォルトでVuexを読み込んでいます。** |
| static | コンパイルしない静的なファイルを配置します。<br>例：robots.txt等。「/（ルート）」でアクセスすることができます。 |
| plugins | アプリケーションをインスタンス化する前に実行したいJavaScriptプラグインを配置します。 |
| pages | **Nuxt.jsにおいて一番重要なディレクトリ**になります。<br>「ビュー」と「ルーティング」に関する役割を担います。<br>「index.vue」に最初に表示させるページのHTMLを記述する。 |
| 　asyncData | コンポーネントのロード毎に実行されます。<br />**Vuexストアのデータを使わずにデータを取得し、レンダリングの事前処理**を行います。 |
| 　fetch | ページがレンダリングされる前に、データをストアに入れるために使用されます。 |
| 　head | ページに対して、メタタグを設定（headタグ内の設定）するために使用されます。 |
| 　layout | layoutを指定するために使用されます。 |
| 　transition | ページ特定のトラジションを指定するために使用されます。<br />（ページコンポーネントの遷移時の動きについて定義できる。） |
| 　scrollToTop | ページのレンダリング時に、一番上までスクロールするか否かを設定します。 |
| 　middleware | ページのレンダリング時に実行するミドルウェアを指定します。 |
| package.json | Nuxt.jsで使用するコマンド等を定義します。 |
| nuxt.config.js | 	「コンテキストオブジェクト」への各種設定を行います。 |
| middleware	 | ページをレンダリングする前に実行される関数を定義して配置することができます。 |
| layouts | アプリケーションのレイアウトファイルを入れます。 |
| 　default.vue | デフォルトのレイアウトファイルになります。 |
| 　error.vue | エラーページのレイアウトファイルになります。 |
| components | ビューで使用するためのコンポーネントを指定します。<br>**Nuxt.jsの影響下のファイルではなく、Nuxt.jsからは自動で読み込まれないので、ピュアなvueファイルになります。使用しないのであれば削除することが可能です。** |
| assets | LESSやSCSS等のコンパイルされていないファイルを配置します。 |
| README.md | |
| yarn.lock | |
| node_modules | |

## Context object

| コンテキストオブジェクト名 | 説明 |
| ---- | ---- |
| app | Vueインスタンスのルートオブジェクト、全てのプラグインにここからアクセスします。 |
| isClient | 	クライアントでレンダリングされたらtrueになります。 |
| isServer | サーバーサイドでレンダリングされたらtrueになります。 |
| isStatic | アプリケーションが静的ジェネレータで出力されたらtrueになります。 |
| isDev | 開発モードで実行されたらtrueになります。 |
| isHMR | Webpackのホットモジュールで出力されたらtrueになります。 |
| route | vue-routerのインスタンス |
| store | Vuexのストアオブジェクト |
| env | nuxt.config.jsに定義したenvオブジェクトを参照できる。 |
| params | routeオブジェクトのparamsのエイリアス |
| query | routeオブジェクトのqueryのエイリアス |
| req | http.Request、Node.jsのリクエスト、静的ジェネレータで出力した場合は存在しません。 |
| res | http.Response、Node.jsのレスポンス、静的ジェネレータで出力した場合は存在しません。 |
| redirect | リダイレクトのための関数。他のルートにリダイレクトさせたい場合は、redirect(status,path,params)でリダイレクトさせる。 |
| error | エラーページを表示させるための関数。error(message,statusCode)で実行させます。 |
