import routes from "../constants/routes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Favorites from "../pages/Favorites/Favorites";
import Movies from "../pages/Movies/Movies";
import AuthGuard from "../Guard/AuthGuard";
import NotFound from "../pages/NotFound/NotFound";

const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.movies,
    Component: Movies,
    Guard: AuthGuard,
  },
  {
    path: routes.signIn,
    Component: SignIn,
  },
  {
    path: routes.SignUp,
    Component: SignUp,
  },
  {
    path: routes.favorites,
    Component: Favorites,
    Guard: AuthGuard,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export default appRoutes;
