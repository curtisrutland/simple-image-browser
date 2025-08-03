import { useEffect, useState } from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../app/RootApp";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ImageGrid from "../components/ImageGrid";
import { FolderImageResults } from "../ipc/fs";
import { useTitle } from "../app/TitleContext";

export function GalleryPage() {
  const { path } = galleryRoute.useSearch();
  const [imageData, setImageData] = useState<FolderImageResults>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { setTitle } = useTitle();
  const isLoading = !imageData && !errorMessage;

  useEffect(() => {
    setTitle("Gallery");
    async function getImages() {
      const results = await window.fs.getImagesAtPath(path);
      if (typeof results === "string") setErrorMessage(results);
      else {
        setImageData(results);
        setTitle?.(results.folderName);
      }
    }
    getImages();
  }, [path]);

  return (
    <Stack flexGrow={1}>
      {isLoading && <Typography>Loading...</Typography>}
      {errorMessage && <Typography>{errorMessage}</Typography>}
      {imageData && <ImageGrid folderImageResults={imageData} />}
    </Stack>
  );
}

interface GallerySearch {
  path: string;
}

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
  validateSearch: (search: Record<string, unknown>): GallerySearch => {
    if (search["path"] == null) throw "Invalid Path";
    return {
      path: search.path as string,
    };
  },
});

export default galleryRoute;
