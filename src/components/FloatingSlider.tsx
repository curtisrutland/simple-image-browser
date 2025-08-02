import Slider from "@mui/material/Slider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

interface FloatingSliderProps {
  onChange?: (value: number) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function FloadingSlider(props: FloatingSliderProps) {
  const { value, onChange, min = 1, max = 6, step = 1, onDecrement, onIncrement } = props;
  const marks = (max - min) * step <= 10;

  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 320,
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
        px: 1,
        py: 1,
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        {onDecrement && (
          <IconButton onClick={onDecrement} size="small">
            <ZoomOutIcon />
          </IconButton>
        )}
        <Slider value={value} onChange={(_, v) => onChange?.(v)} min={min} max={max} step={step} marks={marks} />
        {onIncrement && (
          <IconButton onClick={onIncrement} size="small">
            <ZoomInIcon />
          </IconButton>
        )}
      </Stack>
    </Paper>
  );
}
