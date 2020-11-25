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
              "/food/juice.md",
              "/food/meat.md",
              "/food/vegetable/leafy.md",
              "/food/vegetable/rootstock.md",
              "/food/vegetable/melon.md",
              "/food/vegetable/mushroom.md",
              "/food/vegetable/stem_leave_flower.md",
              "/food/vegetable/bean.md",
              "/food/vegetable/wild.md",
              "/food/vegetable/garlic.md",
              "/food/bean/bean.md",
              "/food/bean/bean_product.md",
              "/food/egg/egg.md",
              "/food/egg/milk.md",
              "/food/fishery/freshwater.md",
              "/food/fishery/shrimp.md",
              "/food/fishery/crab.md",
              "/food/fishery/cowry.md",
              "/food/fishery/other.md",
              "/food/fishery/alga.md",
              "/food/fruit/fruit.md",
              "/food/fruit/nut.md",
            ]
          }
        ]
      }
    }
  };
  