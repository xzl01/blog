
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HarryLoong的博客",
  description: "代码诗人，云彩收藏家，计算机狂热爱好者",

  themeConfig: {
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "目录", link: "/目录/目录" },
        ],
      },

    ],
    docFooter: [
      {
        prev: '上一页',
        next: '下一页'
      }
    ],
    darkModeSwitchLabel: '浅色/深色模式',
    outlineTitle: '此页的大纲',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  },
});
