import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Calendar from "./pages/Calendar";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import Members from "./pages/Members";
import Chat from "./pages/Chat";

const routes = [
  { path: "/", component: Home },
  { path: "/members", component: Members },
  { path: "/calendar", component: Calendar },
  { path: "/restaurants", component: Restaurants },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/chat", component: Chat },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
