import HelloWorld from "../components/vues/pages/HelloWorld";
import WorldHello from "../components/vues/pages/WorldHello";
import LoginForm from "../components/forms/LoginForm";

export default [
  { path: "/login", component: LoginForm },
  { path: "/hello-world", component: HelloWorld },
  { path: "/world-hello", component: WorldHello }
];
