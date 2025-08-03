// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, webUtils, ipcRenderer, webFrame } from "electron";
import { fs } from "./ipc/channels";
import { GetFolderImageResults } from "./ipc/fs";

webFrame.setVisualZoomLevelLimits(1, 4);

contextBridge.exposeInMainWorld("fs", {
  getImagesInFolder: async (file: File): Promise<GetFolderImageResults> => {
    const abspath = webUtils.getPathForFile(file);
    const result: GetFolderImageResults = await ipcRenderer.invoke(fs.getFolderImages, abspath);
    return result;
  },
  getImagesAtPath: async (path: string): Promise<GetFolderImageResults> => {
    return await ipcRenderer.invoke(fs.getFolderImages, path);
  },
  openFolderDialog: async (): Promise<string | undefined> => {
    return await ipcRenderer.invoke(fs.openImageDialog);
  },
});