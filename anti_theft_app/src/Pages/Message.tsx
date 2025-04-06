import { Button, Container, Grid, Tooltip } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function SMSPage() {
  const phoneNumber = "+94705103334";

  const handleSMS = (message: string) => {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  };

  const handleButton1 = () => {
    console.log("Sending Location...");
    handleSMS("L");
  };

  const handleButton2 = () => {
    console.log("Lock Car...");
    handleSMS("B");
  };

  const handleButton3 = () => {
    console.log("Unlock Car...");
    handleSMS("U");
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
      <Grid container spacing={2} width={"100%"}>
        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Send location">
            <Button
              sx={{
                width: "230px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#1a76d2",
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
                width: "230px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#E74C3C",
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
                width: "230px",
                height: "50px",
                fontSize: "large",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                bgcolor: "#009866",
              }}
              variant="contained"
              onClick={handleButton3}
              endIcon={<LockOpenIcon fontSize="large" />}
            >
              Unlock Car
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
