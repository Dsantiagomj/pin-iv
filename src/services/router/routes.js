import SignInPage from "../../pages/signIn";
import SignUpPage from "../../pages/signUp";
import SignOutPage from "../../pages/signOut";
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
    id: "signOut",
    path: "/signout",
    component: SignOutPage,
    routeType: "default",
  },
  {
    id: "dashboard",
    path: "/dashboard",
    component: DashboardPage,
    routeType: "protected",
  },
];

export default routes;
