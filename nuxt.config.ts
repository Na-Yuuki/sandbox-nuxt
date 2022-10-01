export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/reset.css", "@/assets/css/tailwind.css"],
});
