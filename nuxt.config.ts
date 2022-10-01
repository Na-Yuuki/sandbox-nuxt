export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/reset.css", "@/assets/css/tailwind.css"],
  bridge: {
    meta: true, // Nuxt 3 互換の useMeta を使用可能にする。
    // -- オプトインの特徴 --
    // vite: true,         // Webpack 4 の代わりに Vite をバンドラーとして使用する
    // -- デフォルトの特徴 --
    // nitro: false,       // Nitro の代わりにレガシーサーバーを使用する
    // app: false,         // Nuxt 3 互換の `nuxtApp` インターフェースを無効にする
    // capi: false,        // Composition API サポートを無効にする
    // capi: {
    //   legacy: false     // ... あるいは、従来の Composition API のサポートを無効にする
    // },
    // transpile: false,   // モジュールをトランスパイルしない
    // scriptSetup: false, // <script setup> サポートを無効にする
    // autoImports: false, // composables の自動インポートを無効にする
    // constraints: false  // モジュールの非互換性についての警告を表示しない
  },
});
