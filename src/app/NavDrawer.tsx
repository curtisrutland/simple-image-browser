import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
// import ImageIcon from "@mui/icons-material/Image";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { LinkListItemButton } from "../components/links";

interface NavDrawerProps {
  open: boolean;
  onClose?: () => void;
}

export default function NavDrawer(props: NavDrawerProps) {
  const { open, onClose } = props;

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 400 }} role="presentation" onClick={onClose}>
        <List>
          <ListItem disablePadding>
            <LinkListItemButton to="/">
              <ListItemIcon>
                <CreateNewFolderIcon />
              </ListItemIcon>
              <ListItemText primary="Import Folders" />
            </LinkListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <LinkListItemButton to="/blank">
              <ListItemText primary="Blank" />
            </LinkListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
