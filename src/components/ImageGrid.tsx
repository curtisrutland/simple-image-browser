import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FolderImageResults } from "../ipc/fs";
import FloadingSlider from "./FloatingSlider";

interface ImageListProps {
  folderImageResults: FolderImageResults;
}

export default function ImageGrid(props: ImageListProps) {
  const { folderImageResults } = props;
  const { folderName, folderPath, imagePaths } = folderImageResults;
  const [cols, setCols] = useState(3);

  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Stack gap={2}>
        <Typography variant="h6">{folderName}</Typography>
        <Typography variant="subtitle2">{folderPath}</Typography>
        
        <ImageList sx={{ flexGrow: 1, p: 2 }} cols={cols} gap={12}>
          {imagePaths.map((path) => (
            <ImageListItem key={path}>
              <img src={path} alt={path} style={{ objectFit: "contain" }} />
            </ImageListItem>
          ))}
        </ImageList>

        {/* <Stack direction="row" flexWrap="wrap" gap={1}>
          {imagePaths.map((i, index) => (
            <img key={index} src={i} alt="image" />
          ))}
        </Stack> */}
      </Stack>
      <FloadingSlider value={cols} onChange={setCols} />
    </Paper>
  );
}
