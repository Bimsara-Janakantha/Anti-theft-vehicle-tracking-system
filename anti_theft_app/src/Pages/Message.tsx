import { Button, Grid } from "@mui/material";

export default function SMSPage() {
  const phoneNumber = "+94704109990";
  const message = "hello";

  const handleSMS = () => {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid>
        <Button variant="contained" onClick={handleSMS}>
          Send SMS
        </Button>
      </Grid>
    </Grid>
  );
}
