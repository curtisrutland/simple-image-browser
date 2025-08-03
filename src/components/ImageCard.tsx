import { LinkPaper } from "../components/links";

interface ImageCardProps {
  imagePath: string;
  width?: number;
}

export default function ImageCard(props: ImageCardProps) {
  const { imagePath, width } = props;

  return (
    <LinkPaper
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        // maxHeight: "80vh",
        // width: `${width}%`,
      }}
      to="/image"
      search={{ path: imagePath }}
    >
      <img src={imagePath} alt={imagePath} style={{ objectFit: "contain", width: "100%" }} />
    </LinkPaper>
  );
}
