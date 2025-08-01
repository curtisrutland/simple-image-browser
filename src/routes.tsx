import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import RootApp from "./app/RootApp";

const rootRoute = createRootRoute({
  component: RootApp,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

const routeTree = rootRoute.addChildren([indexRoute, galleryRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
