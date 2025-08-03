import { createRoute } from "@tanstack/react-router";
import { getRootRoute } from "../app/RootApp";
import Stack from "@mui/material/Stack";

export function ImagePage() {
  const { path } = imageRoute.useSearch();
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <img
        src={path}
        alt="image"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
      />
    </Stack>
  );
}

interface ImageSearch {
  path: string;
}

const imageRoute = createRoute({
  getParentRoute: getRootRoute,
  path: "/image",
  component: ImagePage,
  validateSearch(search: Record<string, unknown>): ImageSearch {
    if (search["path"] == null) throw "Invalid Path";
    return {
      path: search.path as string,
    };
  },
});

export default imageRoute;
