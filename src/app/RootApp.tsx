import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "./theme";
import "./index.css";
import NavAppBar from "./NavAppBar";
import NavDrawer from "./NavDrawer";

export default function RootApp() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <Stack component="main" sx={{ height: "100vh" }}>
        <NavAppBar onMenuClick={() => setDrawerOpen(true)} />
        <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
}
