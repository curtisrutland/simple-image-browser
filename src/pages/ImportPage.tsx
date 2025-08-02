import Box from "@mui/material/Box";
import FolderImporter from "../components/FolderImporter";
import { createRoute, useRouter } from "@tanstack/react-router";
import rootRoute from "../app/RootApp";
import { FolderImageResults } from "../ipc/fs";

export function ImportPage() {
  const router = useRouter();

  function handleImageFolderDrop(path: string) {
    router.navigate({ to: "/gallery", search: { path } });
  }

  return (
    <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
      <FolderImporter onFolderImported={handleImageFolderDrop} />
    </Box>
  );
}

const importRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: ImportPage,
  path: "/",
});

export default importRoute;
