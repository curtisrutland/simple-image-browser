import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate, Link } from "@tanstack/react-router";

interface NavDrawerProps {
  open: boolean;
  onClose?: () => void;
}

export default function NavDrawer(props: NavDrawerProps) {
  const { open, onClose } = props;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    onClose?.();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          <ListItem disablePadding>
            {/* <ListItemButton onClick={() => handleNavigation('/')}> */}
            <ListItemButton LinkComponent={Link} href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {/* <ListItemButton onClick={() => handleNavigation("/gallery")}> */}
            <ListItemButton LinkComponent={Link} href="/gallery">
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/fake")}>
              Bad Nav Item
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
