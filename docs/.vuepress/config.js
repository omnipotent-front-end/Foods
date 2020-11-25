module.exports = {
    title: "无所不能的前端--健康指南",
    base: "/Foods/",
    description: "Hello world",
    themeConfig: {
      repo: "omnipotent-front-end/Foods",
      nav: [{ text: "awesome-url", link: "https://brizer.github.io/urls/zh/" },{ text: "设计模式", link: "https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/" }],
      sidebarDepth: 2,
      sidebar: {
        "": [
          {
            title: "食物",
            children: [
              "/food/beans.md",
              "/food/egg.md",
              "/food/juice.md",
              "/food/meat.md",
              "/food/nut.md",
              "/food/vegetable/leafy.md",
              "/food/vegetable/garlic.md",
              "/food/vegetable/rootstock.md",
              "/food/vegetable/melon.md",
              "/food/vegetable/mushroom.md",
              "/food/vegetable/stem_leave_flower.md",
              "/food/vegetable/bean.md",
            ]
          }
        ]
      }
    }
  };
  