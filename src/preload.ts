// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, webUtils, ipcRenderer } from "electron";
import { fs } from "./ipc/channels";
import { GetFolderImageResults } from "./ipc/fs";

contextBridge.exposeInMainWorld("fs", {
  getImagesInFolder: async (file: File): Promise<GetFolderImageResults> => {
    const abspath = webUtils.getPathForFile(file);
    const result: GetFolderImageResults = await ipcRenderer.invoke(fs.getFolderImages, abspath);
    return result;
  },
});
