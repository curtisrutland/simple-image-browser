import { createRoute } from "@tanstack/react-router";
import { getRootRoute } from "../app/RootApp";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export function BlankPage() {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <Typography>Blank</Typography>
    </Stack>
  );
}

const blankPageRoute = createRoute({
  getParentRoute: getRootRoute,
  path: "/blank",
  component: BlankPage,
});

export default blankPageRoute;
