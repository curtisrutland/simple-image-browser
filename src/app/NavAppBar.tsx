import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
// import { Link } from "@tanstack/react-router";
// import { LinkIconButton } from "../components/links";
import { LinkIconButton } from "@/components/links";

interface NavAppBarProps {
  onMenuClick?: () => void;
}

export default function NavAppBar(props: NavAppBarProps) {
  const { onMenuClick } = props;

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
        <Tooltip title="Add Folder">
          <LinkIconButton to="/">
            <AddIcon />
          </LinkIconButton>
        </Tooltip>
        <Tooltip title="Back">
          <IconButton onClick={() => history.back()}>
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Forward">
          <IconButton onClick={() => history.forward()}>
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
