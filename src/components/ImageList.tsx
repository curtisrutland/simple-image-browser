import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FolderImageResults } from "../ipc/fs";

interface ImageListProps {
  folderImageResults: FolderImageResults;
}

export default function ImageList(props: ImageListProps) {
  const { folderImageResults } = props;
  const { folderName, folderPath, imagePaths } = folderImageResults;

  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Stack gap={2}>
        <Typography variant="h6">{folderName}</Typography>
        <Typography variant="subtitle2">{folderPath}</Typography>
        {imagePaths.map((i, index) => (
          <img key={index} src={i} alt="image" />
        ))}
      </Stack>
    </Paper>
  );
}
