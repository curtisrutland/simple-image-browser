import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
        <Typography variant="h6" color="inherit" component="div">
          Simple Image Browser
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
