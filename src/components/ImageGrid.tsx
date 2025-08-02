import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FolderImageResults } from "../ipc/fs";
import FloadingSlider from "./FloatingSlider";
import ImageCard from "./ImageCard";

const interval = 1;
const minimum = 10;
const maximum = 100;

interface ImageListProps {
  folderImageResults: FolderImageResults;
}

export default function ImageGrid(props: ImageListProps) {
  const { folderImageResults } = props;
  const { folderName, folderPath, imagePaths } = folderImageResults;
  const [imgWidth, setImgWidth] = useState(20);

  function decrement() {
    const newVal = Math.max(minimum, imgWidth - interval);
    setImgWidth(newVal);
  }

  function increment() {
    const newVal = Math.min(maximum, imgWidth + interval);
    setImgWidth(newVal);
  }

  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Stack gap={2}>
        <Typography variant="h6">{folderName}</Typography>
        <Typography variant="subtitle2">{folderPath}</Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="space-around" sx={{ p: 2 }}>
          {imagePaths.map((i) => (
            <ImageCard key={i} imagePath={i} width={imgWidth} />
          ))}
        </Stack>
      </Stack>
      <FloadingSlider
        value={imgWidth}
        onChange={setImgWidth}
        min={minimum}
        max={maximum}
        step={1}
        onDecrement={decrement}
        onIncrement={increment}
      />
    </Paper>
  );
}
