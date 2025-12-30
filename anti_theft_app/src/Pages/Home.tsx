import { Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={"100%"}
      padding={2}
    >
      <Grid>
        <img src={logo} alt="Logo" style={{ maxWidth: 600, width: "100%" }} />
      </Grid>

      <Grid>
        <Typography variant="h3" align="center" fontWeight={"bold"} mb={2}>
          Welcome<span style={{ whiteSpace: "nowrap" }}></span>
        </Typography>

        <Typography
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          mb={3}
        >
          Your reliable partner in anti-theft vehicle tracking. Stay connected
          and protected.
        </Typography>
      </Grid>

      <Grid>
        <Button
          sx={{
            borderRadius: "30px",
            width: 150,
            height: 40,
            fontWeight: "bold",
          }}
          variant="contained"
          onClick={() => navigate("/msg")}
        >
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
