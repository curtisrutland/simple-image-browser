import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "./theme";
import "./index.css";
import NavAppBar from "./NavAppBar";
import NavDrawer from "./NavDrawer";
import NotFound from "../pages/NotFound";
import DropEnabledContainer from "../components/DropEnabledContainer";
import TitleContextProvider from "./TitleContext";

export function RootApp() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <TitleContextProvider>
        <DropEnabledContainer>
          <NavAppBar onMenuClick={() => setDrawerOpen(true)} />
          <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
          <Outlet />
        </DropEnabledContainer>
      </TitleContextProvider>
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
