import { DragEvent, PropsWithChildren, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useSnackbar } from "notistack";
import Stack from "@mui/material/Stack";
// import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type DivDragEvent = DragEvent<HTMLDivElement>;
type DropEnabledContainerProps = PropsWithChildren;
type Severity = "info" | "success" | "warning" | "error";

export default function DropEnabledContainer(props: DropEnabledContainerProps) {
  const { children } = props;
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  // const [open, setOpen] = useState(false);
  // const [text, setText] = useState("");
  // const [severity, setSeverity] = useState<Severity>("success");

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

  async function handleDrop(e: DivDragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const possibleFolder = e.dataTransfer.files[0];
    if (!possibleFolder) {
      return;
    }
    const results = await window.fs.getImagesInFolder(possibleFolder);
    if (typeof results === "string") {
      enqueueSnackbar({ message: results, variant: "error", autoHideDuration: 5000 });
    } else {
      console.log(results);
      enqueueSnackbar({
        message: "Successfully imported folder.",
        variant: "success",
        autoHideDuration: 5000,
      });
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
    </Stack>
  );
}
