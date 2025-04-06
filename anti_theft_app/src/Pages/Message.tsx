import { Button, Grid } from "@mui/material";

export default function Message() {
  const handleSMS = () => {
    // This opens the SMS app with "hello" as the message
    window.location.href = "sms:?body=hello";
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
