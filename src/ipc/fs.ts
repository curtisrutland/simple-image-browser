import { promises as fs } from "node:fs";
import * as path from "node:path";
import { imageBrowserProtocolName } from "../protocols";

const globPattern = "*.{jpg,jpeg,png,gif,webp,svg}";

// const opts = {cwd: folderPath};
// const results = fs.glob(globPattern, opts);
// for await (const entry of results) {
//   console.log(entry);
// }

export interface FolderImageResults {
  imagePaths: string[];
  folderName: string;
  folderPath: string;
}

export type GetFolderImageResults = FolderImageResults | string;

export async function getFolderImages(folderPath: string): Promise<GetFolderImageResults> {
  try {
    const folderStat = await fs.stat(folderPath);
    if (!folderStat.isDirectory()) {
      return "Not a directory";
    }

    const imagePaths: string[] = [];
    await fs.access(folderPath, fs.constants.R_OK);
    const globResults = fs.glob(globPattern, { cwd: folderPath });
    for await (const file of globResults) {
      const fullPath = path.join(folderPath, file);
      imagePaths.push(`${imageBrowserProtocolName}://${fullPath}`);
    }
    if (imagePaths.length < 1) return "No images found in folder";
    return { imagePaths, folderPath, folderName: path.basename(folderPath) };
  } catch (ex) {
    return (ex.message as string) ?? "No error message specified";
  }
}
