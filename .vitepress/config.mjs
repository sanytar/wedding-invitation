import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "pages",
  title: "Приглашение",
  description: "Приглашение на свадьбу",
  themeConfig: {},
  head: [["link", { rel: "icon", href: "/koticfavicon.ico" }]],
  "cleanUrls": true
})
