import { Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={2}
    >
      <Grid>
        <img src={logo} alt="V Track Logo" style={{ maxWidth: 200 }} />
      </Grid>

      <Grid>
        <Typography variant="h3" align="center" fontWeight={"bold"}>
          Welcome to
        </Typography>
        <Typography variant="h3" align="center" fontWeight={"bold"}>
          V Track
        </Typography>
        <Typography variant="subtitle1">
          Your reliable partner in anti-theft vehicle tracking. Stay connected
          and protected.
        </Typography>
      </Grid>

      <Grid>
        <Button variant="contained" onClick={() => navigate("/msg")}>
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
