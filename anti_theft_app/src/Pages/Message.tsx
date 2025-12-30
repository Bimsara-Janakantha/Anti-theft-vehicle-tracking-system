import { Button, Container, Grid, Tooltip, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";
import ActionButton from "../Components/ActionButton";

export default function SMSPage() {
  const navigator = useNavigate();
  const botLink = "https://t.me/MyESP32_NotifierBot"; 

  const handleTelegramMessage = (message: string) => {
    const url = `${botLink}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // opens in new tab
  };

  const handleButton1 = () => {
    console.log("Sending Location...");
    handleTelegramMessage("E");
  };

  const handleButton2 = () => {
    console.log("Lock Car...");
    handleTelegramMessage("B");
  };

  const handleButton3 = () => {
    console.log("Unlock Car...");
    handleTelegramMessage("U");
  };

  const handleButton4 = () => {
    console.log("Goto Map...");
    navigator("/map");
  };

  const handleButton5 = () => {
    console.log("Emergancy...");
    handleTelegramMessage("L");
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
          <img src={logo} alt="Logo" style={{ maxWidth: 500, width: "100%" }} />

          <Typography fontWeight={"bold"} variant="h6" textAlign={"center"}>
            Your reliable partner in anti-theft vehicle tracking.
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 3 }}
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
          size={{ xs: 12, md: 3 }}
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
          size={{ xs: 12, md: 3 }}
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
                bgcolor: "#a89b25ff",
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

        <Grid
          size={{ xs: 12, md: 3 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Goto Map">
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
              onClick={handleButton4}
              endIcon={<PlaceIcon fontSize="large" />}
            >
              Goto Map
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

      <ActionButton onClick={handleButton5} />
    </Container>
  );
}
