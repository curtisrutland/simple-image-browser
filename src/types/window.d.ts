type GetFolderImageResults = import("../ipc/fs").GetFolderImageResults;

declare interface Window {
  fs: {
    getImagesInFolder: (file: File) => Promise<GetFolderImageResults>;
  };
}
