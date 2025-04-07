import { Button, Container, Grid, Tooltip, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";
import ActionButton from "../Components/ActionButton";

export default function SMSPage() {
  const navigator = useNavigate();
  const phoneNumber = "+94705103334";

  const handleSMS = (message: string) => {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  };

  const handleButton1 = () => {
    console.log("Sending Location...");
    handleSMS("E");
  };

  const handleButton2 = () => {
    console.log("Lock Car...");
    handleSMS("B");
  };

  const handleButton3 = () => {
    console.log("Unlock Car...");
    handleSMS("U");
  };

  const handleButton4 = () => {
    console.log("Emergancy...");
    handleSMS("L");
  };

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} width={"100%"}>
        <Grid
          size={12}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          display={"flex"}
          mb={2}
        >
          <img src={logo} alt="V Track Logo" style={{ maxWidth: 200 }} />

          <Typography fontWeight={"bold"} variant="h6" textAlign={"center"}>
            Your reliable partner in anti-theft vehicle tracking.
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Send location">
            <Button
              sx={{
                width: "240px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#1a76d2",
                borderRadius: "30px",
              }}
              variant="contained"
              onClick={handleButton1}
              endIcon={<NearMeIcon fontSize="large" />}
            >
              Send Location
            </Button>
          </Tooltip>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Lock Car">
            <Button
              sx={{
                width: "240px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#E74C3C",
                borderRadius: "30px",
              }}
              variant="contained"
              onClick={handleButton2}
              endIcon={<LockOutlineIcon fontSize="large" />}
            >
              Lock Car
            </Button>
          </Tooltip>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Unlock Car">
            <Button
              sx={{
                width: "240px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#009866",
                borderRadius: "30px",
              }}
              variant="contained"
              onClick={handleButton3}
              endIcon={<LockOpenIcon fontSize="large" />}
            >
              Unlock Car
            </Button>
          </Tooltip>
        </Grid>

        <Grid size={12} justifyContent={"center"} display={"flex"}>
          <Button
            sx={{
              width: "240px",
              height: "50px",
              fontSize: "large",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              bgcolor: "#595959",
              borderRadius: "30px",
            }}
            variant="contained"
            onClick={() => {
              navigator("/home");
            }}
            startIcon={<ArrowBackIcon fontSize="large" />}
          >
            Back
          </Button>
        </Grid>
      </Grid>

      <ActionButton onClick={handleButton4} />
    </Container>
  );
}
