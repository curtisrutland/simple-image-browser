import { ipcMain } from "electron";
import { getFolderImages, openFolderDialog } from "./fs";
import * as channels from "./channels";

export function registerIpcHandlers() {
  ipcMain.handle(channels.fs.getFolderImages, (_, path) => getFolderImages(path));
  ipcMain.handle(channels.fs.openImageDialog, (_) => openFolderDialog());
}
