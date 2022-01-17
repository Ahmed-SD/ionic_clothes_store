import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";
import categoryPage from "../views/category.vue";
import home from "../views/home.vue";
import cart from "../views/cart.vue";
import checkout from "../views/checkout.vue";
import order from "../views/order.vue";
import contact from "../views/contact.vue";
import allProducts from "../views/products.vue";
import product from "../views/product.vue";
import search from "../views/search.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/home"
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "home",
        component : home
      },
      {
        path: "home/search",
        component : search
      },
      {
        path: "category",
        component:categoryPage
      },
      {
        path: "category/products/:id",
        component:allProducts
      }, {
        path: "category/products/product/:id",
        component:product,
            },
      {
        path: "cart",
        component:cart,
      },
      {
        path: "cart/checkout/",
        component:checkout,
      },
      {
        path: "cart/checkout/order",
        component:order,
      },
      {
        path: "contact",
        component:contact,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
