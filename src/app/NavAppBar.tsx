import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { LinkIconButton } from "../components/links";
import { useRouter, useCanGoBack } from "@tanstack/react-router";

interface NavAppBarProps {
  onMenuClick?: () => void;
}

export default function NavAppBar(props: NavAppBarProps) {
  const { onMenuClick } = props;
  const router = useRouter();
  const canGoBack = useCanGoBack();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
          Simple Image Browser
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Import Folder">
          <LinkIconButton to="/">
            <CreateNewFolderIcon />
          </LinkIconButton>
        </Tooltip>
        <Tooltip title="Back">
          <span>
            <IconButton disabled={!canGoBack} onClick={() => router.history.back()}>
              <ArrowBackIcon />
            </IconButton>
          </span>
        </Tooltip>
        {/* <Tooltip title="Forward">
          <IconButton onClick={() => history.forward()}>
            <ChevronRightIcon />
          </IconButton>
        </Tooltip> */}
      </Toolbar>
    </AppBar>
  );
}
