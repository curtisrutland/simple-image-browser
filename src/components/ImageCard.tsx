import Paper from "@mui/material/Paper";

interface ImageCardProps {
  imagePath: string;
  width?: number;
}

export default function ImageCard(props: ImageCardProps) {
  const { imagePath, width } = props;

  return (
    <Paper
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
        // maxHeight: "80vh",
        // width: `${width}%`,
      }}
    >
      <img src={imagePath} alt={imagePath} style={{ objectFit: "contain", width: "100%" }} />
    </Paper>
  );
}
