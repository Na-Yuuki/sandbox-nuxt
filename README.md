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

| 構成要素       | 説明                                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nuxt           | コマンドでのビルド結果はここに配置されます。                                                                                                                                                                        |
| └ router.js  | pages ディレクトリ配下のファイルに対して、ルーティングの設定を行います。                                                                                                                                            |
| store          | Vuex のストアファイルを配置します。**Nuxt.js ではデフォルトで Vuex を読み込んでいます。**                                                                                                                           |
| static         | コンパイルしない静的なファイルを配置します。<br>例：robots.txt 等。「/（ルート）」でアクセスすることができます。                                                                                                    |
| plugins        | アプリケーションをインスタンス化する前に実行したい JavaScript プラグインを配置します。                                                                                                                              |
| pages          | **Nuxt.js において一番重要なディレクトリ**になります。<br>「ビュー」と「ルーティング」に関する役割を担います。<br>「index.vue」に最初に表示させるページの HTML を記述する。                                         |
| └ asyncData   | コンポーネントのロード毎に実行されます。<br />**Vuex ストアのデータを使わずにデータを取得し、レンダリングの事前処理**を行います。                                                                                   |
| └ fetch       | ページがレンダリングされる前に、データをストアに入れるために使用されます。                                                                                                                                          |
| └ head        | ページに対して、メタタグを設定（head タグ内の設定）するために使用されます。                                                                                                                                         |
| └ layout      | layout を指定するために使用されます。                                                                                                                                                                               |
| └ transition  | ページ特定のトラジションを指定するために使用されます。<br />（ページコンポーネントの遷移時の動きについて定義できる。）                                                                                              |
| └ scrollToTop | ページのレンダリング時に、一番上までスクロールするか否かを設定します。                                                                                                                                              |
| └ middleware  | ページのレンダリング時に実行するミドルウェアを指定します。                                                                                                                                                          |
| package.json   | Nuxt.js で使用するコマンド等を定義します。                                                                                                                                                                          |
| nuxt.config.js | 「コンテキストオブジェクト」への各種設定を行います。                                                                                                                                                                |
| middleware     | ページをレンダリングする前に実行される関数を定義して配置することができます。                                                                                                                                        |
| layouts        | アプリケーションのレイアウトファイルを入れます。                                                                                                                                                                    |
| └ default.vue | デフォルトのレイアウトファイルになります。                                                                                                                                                                          |
| └ error.vue   | エラーページのレイアウトファイルになります。                                                                                                                                                                        |
| components     | ビューで使用するためのコンポーネントを指定します。<br>**Nuxt.js の影響下のファイルではなく、Nuxt.js からは自動で読み込まれないので、ピュアな vue ファイルになります。使用しないのであれば削除することが可能です。** |
| assets         | LESS や SCSS 等のコンパイルされていないファイルを配置します。                                                                                                                                                       |
| README.md      |                                                                                                                                                                                                                     |
| yarn.lock      |                                                                                                                                                                                                                     |
| node_modules   |                                                                                                                                                                                                                     |

## Context object

| コンテキストオブジェクト名 | 説明                                                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| app                        | Vue インスタンスのルートオブジェクト、全てのプラグインにここからアクセスします。                                     |
| isClient                   | クライアントでレンダリングされたら true になります。                                                                 |
| isServer                   | サーバーサイドでレンダリングされたら true になります。                                                               |
| isStatic                   | アプリケーションが静的ジェネレータで出力されたら true になります。                                                   |
| isDev                      | 開発モードで実行されたら true になります。                                                                           |
| isHMR                      | Webpack のホットモジュールで出力されたら true になります。                                                           |
| route                      | vue-router のインスタンス                                                                                            |
| store                      | Vuex のストアオブジェクト                                                                                            |
| env                        | nuxt.config.js に定義した env オブジェクトを参照できる。                                                             |
| params                     | route オブジェクトの params のエイリアス                                                                             |
| query                      | route オブジェクトの query のエイリアス                                                                              |
| req                        | http.Request、Node.js のリクエスト、静的ジェネレータで出力した場合は存在しません。                                   |
| res                        | http.Response、Node.js のレスポンス、静的ジェネレータで出力した場合は存在しません。                                  |
| redirect                   | リダイレクトのための関数。他のルートにリダイレクトさせたい場合は、redirect(status,path,params)でリダイレクトさせる。 |
| error                      | エラーページを表示させるための関数。error(message,statusCode)で実行させます。                                        |
