import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FolderImageResults } from "./ipc/fs";

interface ImageListProps {
  data: FolderImageResults;
}

export default function ImageList(props: ImageListProps) {
  const { data } = props;
  const { folderName, folderPath, imagePaths } = data;

  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Stack gap={2}>
        <Typography variant="h6">{folderName}</Typography>
        <Typography variant="subtitle2">{folderPath}</Typography>
        {imagePaths.map((i) => (
          <img src={i} alt="image" />
        ))}
      </Stack>
    </Paper>
  );
}
