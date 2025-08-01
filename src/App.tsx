import { useState } from "react";
import { Stack } from "@mui/material";
import ImageDropzone from "./ImageDropzone";
import ImageList from "./ImageList";
import { FolderImageResults } from "./ipc/fs";

function App() {
  const [imageData, setImageData] = useState<FolderImageResults>();

  function handleImageFolderDrop(results: FolderImageResults) {
    setImageData(results);
  }

  return (
    <Stack sx={{ height: "100%", p: 4 }}>
      {imageData == null ? <ImageDropzone onImageFolderDrop={handleImageFolderDrop} /> : <ImageList data={imageData} />}
    </Stack>
  );
}

export default App;
