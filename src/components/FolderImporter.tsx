import { useState, DragEvent } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ImageIcon from "@mui/icons-material/Image";

const defaultMessage = "Drop a folder with images here.";

interface FolderImporterProps {
  onFolderImported?: (path: string) => void;
}

type DivDragEvent = DragEvent<HTMLDivElement>;

export default function FolderImporter(props: FolderImporterProps) {
  const { onFolderImported } = props;
  const [message, setMessage] = useState(defaultMessage);

  function handleDragOver(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setMessage("Ready!");
  }

  function handleDragEnter(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragLeave(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setMessage(defaultMessage);
  }

  async function handleDrop(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setMessage("drop");
    const possibleFolder = e.dataTransfer.files[0];
    if (!possibleFolder) {
      setMessage("Drop had no files!");
      return;
    }
    const results = await window.fs.getImagesInFolder(possibleFolder);
    if (typeof results === "string") setMessage(results);
    else {
      setMessage("Got Files");
      onFolderImported?.(results.folderPath);
    }
  }

  async function handleClick() {
    const path = await window.fs.openFolderDialog();
    if (typeof path === "string") {
      onFolderImported?.(path);
    }
  }

  return (
    <Paper
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <ImageIcon sx={{ fontSize: 80, mb: 3, color: "primary.main" }} />
      <Typography variant="h3" gutterBottom>
        {message}
      </Typography>
      <Button onClick={handleClick}>Or Click Here to Select a Folder</Button>
    </Paper>
  );
}
