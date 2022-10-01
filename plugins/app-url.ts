import { defineNuxtPlugin } from "#app";

export class AppUrl {
  /** サイトのURLを取得する */
  public siteUrl() {
    // console.log(window.location);
    return `https://example.com`;
  }

  /** サイト共通のOGP画像のURLを取得する */
  public getOgpUrl() {
    return `${this.siteUrl()}/ogp.png`;
  }
}

const appUrl = new AppUrl();

// カスタムプラグインappUrlとしてnuxtに登録する
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("appUrl", appUrl);
});

//
// nuxt用の型定義 (TypeScript用)
//

declare module "#app" {
  interface NuxtApp {
    $appUrl: AppUrl;
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $appUrl: AppUrl;
  }
}
