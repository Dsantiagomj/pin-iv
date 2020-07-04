import SignInPage from "../../pages/signIn";
import SignUpPage from "../../pages/signUp";
import DashboardPage from "../../pages/dashboard";

const routes = [
  {
    id: "signIn",
    path: "/signin",
    component: SignInPage,
    routeType: "public",
  },
  {
    id: "signUp",
    path: "/signup",
    component: SignUpPage,
    routeType: "public",
  },
  {
    id: "dashboard",
    path: "/dashboard",
    component: DashboardPage,
    routeType: "protected",
  },
];

export default routes;
