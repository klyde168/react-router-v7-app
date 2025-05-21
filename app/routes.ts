import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  // renders into the root.tsx Outlet at /
  //index("./home.tsx"),
   route("about", "./about.tsx"),
   
  route("dashboard", "./dashboard/dashboard.tsx", [
    // renders into the dashboard.tsx Outlet at /dashboard
    // renders into the dashboard.tsx Outlet at /dashboard
    //index("./dashboard/index.tsx"),
    route("home", "./dashboard/dashboard-home.tsx"),        //http://localhost:5173/dashboard/home
    route("settings", "./dashboard/dashboard-settings.tsx"),//http://localhost:5173/dashboard/settings
  ]),
] satisfies RouteConfig;
