import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  Home,
  NotFound,
  AuthView,
  BodPotensial,
  BodParsial,
  Datauser,
  SettingDashboard,
} from "../pages";

// pass your route here.

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Auth",
    component: AuthView,
    exact: false,
  },
  {
    path: "/Data_BOD_Potensial",
    component: BodPotensial,
    exact: false,
  },
  {
    path: "/Data_BOD_Parsial",
    component: BodParsial,
    exact: false,
  },
  {
    path: "Data_User",
    component: Datauser,
    exact: false,
  },
  {
    path: "Setting_Dashboard",
    component: SettingDashboard,
    exact: false,
  },
];

function RouteWithSubRoutes(route) {
  return (
    <main>
      <Route
        {...route}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </main>
  );
}

export function RootRouterConfig() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
