import { useRouter, useCanGoBack } from "@tanstack/react-router";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorScheme } from "@mui/material/styles";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { LinkIconButton } from "../components/links";
import { useTitle } from "./TitleContext";

interface NavAppBarProps {
  onMenuClick?: () => void;
}

function getCurrentMode(
  mode: "light" | "dark" | "system" | undefined,
  systemMode: "light" | "dark" | undefined,
) {
  if (mode == null) return "";
  if (mode === "system") {
    return systemMode;
  } else return mode;
}

function getNextMode(
  mode: "light" | "dark" | "system" | undefined,
  systemMode: "light" | "dark" | undefined,
) {
  return getCurrentMode(mode, systemMode) === "dark" ? "light" : "dark";
}

export default function NavAppBar(props: NavAppBarProps) {
  const { onMenuClick } = props;
  const router = useRouter();
  const canGoBack = useCanGoBack();
  const { mode, setMode, systemMode } = useColorScheme();
  const { title } = useTitle();

  // const tooltip =
  //   mode != "system"
  //     ? mode === "dark"
  //       ? "Light"
  //       : "Dark"
  //     : systemMode === "dark"
  //       ? "Light"
  //       : "Dark";

  function toggleMode() {
    const nextMode = getNextMode(mode, systemMode);
    setMode(nextMode);
    // if (mode == null) return;
    // if (mode === "system") {
    //   setMode(systemMode === "dark" ? "light" : "dark");
    // }
    // setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Tooltip title="Back">
          <span>
            <IconButton disabled={!canGoBack} sx={{ mr: 2 }} onClick={() => router.history.back()}>
              <ArrowBackIcon />
            </IconButton>
          </span>
        </Tooltip>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Import Folder">
          <LinkIconButton to="/">
            <CreateNewFolderIcon />
          </LinkIconButton>
        </Tooltip>
        <Tooltip title={`Switch to ${getNextMode(mode, systemMode)} mode`}>
          <IconButton onClick={toggleMode}>
            {getCurrentMode(mode, systemMode) === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
