import React from 'react';
import { Box } from '@mui/material';
import ImageDropzone from '../components/ImageDropzone';
import ImageList from '../components/ImageList';
import { FolderImageResults } from '../ipc/fs';

function GalleryPage() {
  const [imageResults, setImageResults] = React.useState<FolderImageResults | null>(null);

  const handleImageFolderDrop = (results: FolderImageResults) => {
    setImageResults(results);
  };

  return (
    <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <ImageDropzone onImageFolderDrop={handleImageFolderDrop} />
      {imageResults && <ImageList folderImageResults={imageResults} />}
    </Box>
  );
}

export default GalleryPage;