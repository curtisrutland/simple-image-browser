import Slider from "@mui/material/Slider";
import Paper from "@mui/material/Paper";

interface FloatingSliderProps {
  onChange?: (value: number) => void;
  value: number;
}

export default function FloadingSlider(props: FloatingSliderProps) {
  const { value, onChange } = props;

  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 300,
        mx: 1,
        borderRadius: 10,
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 8,
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
        },
        px: 3,
        py: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Slider value={value} onChange={(_, v) => onChange?.(v)} min={1} max={6} step={1} marks />
    </Paper>
  );
}
