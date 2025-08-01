import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "./theme";
import "./index.css";
import NavAppBar from "./nav/NavAppBar";
import NavDrawer from "./nav/NavDrawer";

export default function RootApp() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <Stack component="main" sx={{ height: "100vh" }}>
        <NavAppBar onMenuClick={() => setDrawerOpen(true)} />
        <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Typography>Hello World</Typography>
      </Stack>
    </ThemeProvider>
  );
}
