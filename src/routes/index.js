import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home, NotFound, AuthView } from "../pages";

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
