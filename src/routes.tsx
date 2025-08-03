import { createRouter } from "@tanstack/react-router";
import galleryRoute from "./pages/GalleryPage";
import importRoute from "./pages/ImportPage";
import blankPageRoute from "./pages/BlankPage";
import imageRoute from "./pages/ImagePage";
import rootRoute from "./app/RootApp";

const routeTree = rootRoute.addChildren([
  importRoute,
  galleryRoute,
  imageRoute,
  blankPageRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
