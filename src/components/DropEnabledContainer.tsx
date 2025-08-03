import { DragEvent, PropsWithChildren, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import Stack from "@mui/material/Stack";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type DivDragEvent = DragEvent<HTMLDivElement>;
type DropEnabledContainerProps = PropsWithChildren;
type Severity = "info" | "success" | "warning" | "error";

export default function DropEnabledContainer(props: DropEnabledContainerProps) {
  const { children } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [severity, setSeverity] = useState<Severity>("success");

  function handleDragOver(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragEnter(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragLeave(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleClose(_: unknown, reason?: SnackbarCloseReason) {
    if (reason == "clickaway") return;
    setOpen(false);
  }

  async function handleDrop(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const possibleFolder = e.dataTransfer.files[0];
    if (!possibleFolder) {
      return;
    }
    const results = await window.fs.getImagesInFolder(possibleFolder);
    if (typeof results === "string") {
      setText(results);
      setSeverity("error");
      setOpen(true);
    } else {
      console.log(results);
      setText("Successfully imported folder.");
      setSeverity("success");
      setOpen(true);
      router.navigate({ to: "/gallery", search: { path: results.folderPath } });
    }
  }

  return (
    <Stack
      component="main"
      sx={{ height: "100vh", overflow: "auto" }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert severity={severity} sx={{ width: "100%" }} variant="filled" onClose={handleClose}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
