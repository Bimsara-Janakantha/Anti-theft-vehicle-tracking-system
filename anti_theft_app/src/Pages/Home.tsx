import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="column"
      minHeight="100vh"
    >
      <Grid>
        <Typography variant="h4">Welcome to the App!</Typography>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => navigate("/second")}>
          Go to Next Page
        </Button>
      </Grid>
    </Grid>
  );
}
