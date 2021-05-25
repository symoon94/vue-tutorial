import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Calendar from "./pages/Calendar";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";

const routes = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/restaurants", component: Restaurants },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
