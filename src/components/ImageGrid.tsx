import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FolderImageResults } from "../ipc/fs";
import FloadingSlider from "./FloatingSlider";
import ImageCard from "./ImageCard";

const interval = 1;
const minimum = 1;
const maximum = 10;

interface ImageListProps {
  folderImageResults: FolderImageResults;
}

export default function ImageGrid(props: ImageListProps) {
  const { folderImageResults } = props;
  const { folderName, folderPath, imagePaths } = folderImageResults;
  const [imgWidth, setImgWidth] = useState(8);

  function decrement() {
    const newVal = Math.max(minimum, imgWidth - interval);
    setImgWidth(newVal);
  }

  function increment() {
    const newVal = Math.min(maximum, imgWidth + interval);
    setImgWidth(newVal);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack gap={2}>
        <Typography variant="subtitle2">{folderPath}</Typography>
        <Box sx={{ p: 1 }}>
          <ImageList cols={11 - imgWidth} gap={8}>
            {imagePaths.map((path) => (
              <ImageListItem key={path}>
                <ImageCard imagePath={path} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
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
    </Box>
  );
}
