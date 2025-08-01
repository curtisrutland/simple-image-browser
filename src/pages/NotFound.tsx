import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function NotFound() {
  return (
    <Container sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ p: 8 }}>
        <Typography variant="h3">404</Typography>
        <Typography variant="h5">Page Not Found</Typography>
      </Paper>
    </Container>
  );
}
