import { createLink } from "@tanstack/react-router";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export const LinkListItemButton = createLink(ListItemButton);
export const LinkIconButton = createLink(IconButton);
export const LinkButton = createLink(Button);
export const LinkPaper = createLink(Paper);