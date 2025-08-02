import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { ThemeProvider } from "./theme";
import "./index.css";
import NavAppBar from "./NavAppBar";
import NavDrawer from "./NavDrawer";
import NotFound from "../pages/NotFound";

export function RootApp() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <Stack component="main" sx={{ height: "100vh", overflow: "auto" }}>
        <NavAppBar onMenuClick={() => setDrawerOpen(true)} />
        <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
}

const rootRoute = createRootRoute({
  component: RootApp,
  notFoundComponent: NotFound,
});

export default rootRoute;

export function getRootRoute() {
  return rootRoute;
}