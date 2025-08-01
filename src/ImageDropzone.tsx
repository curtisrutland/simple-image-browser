import { useState, DragEvent } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FolderImageResults } from "./ipc/fs";

interface ImageDropzoneProps {
  onImageFolderDrop?: (results: FolderImageResults) => void;
}

export default function ImageDropzone(props: ImageDropzoneProps) {
  const { onImageFolderDrop } = props;
  const [message, setMessage] = useState("Waiting for folder...");

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setMessage("drag over");
  }
  function handleDragEnter(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    // setMessage("drag enter");
  }
  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setMessage("drag leave");
  }

  async function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setMessage("drop");
    const possibleFolder = e.dataTransfer.files[0];
    if (!possibleFolder) {
      setMessage("Drop had no files");
      return;
    }
    const results = await window.fs.getImagesInFolder(possibleFolder);
    if (typeof results === "string") setMessage(results);
    else {
      // setMessage(results.imagePaths.join(","));
      setMessage("Got Files");
      onImageFolderDrop?.(results);
    }
  }

  return (
    <Paper
      sx={{ display: "flex", flexFlow: "column nowrap", justifyContent: "center", alignItems: "center", flexGrow: 1 }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Typography>{message}</Typography>
    </Paper>
  );
}
