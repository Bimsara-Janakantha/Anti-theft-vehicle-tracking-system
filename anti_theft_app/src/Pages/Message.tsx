import { Container, Grid, IconButton, Tooltip } from "@mui/material";
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
            <IconButton onClick={handleButton1} size="large">
              <NearMeIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Lock Car">
            <IconButton onClick={handleButton2} size="large">
              <LockOutlineIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          justifyContent={"center"}
          display={"flex"}
        >
          <Tooltip title="Unlock Car">
            <IconButton onClick={handleButton3} size="large">
              <LockOpenIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
