import { Button, Typography, Grid } from "@mui/material";

export default function AppPage() {
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
        <Typography variant="h4">My Web App</Typography>
      </Grid>
      <Grid>
        <Button variant="outlined">Button 1</Button>
      </Grid>
      <Grid>
        <Button variant="outlined">Button 2</Button>
      </Grid>
      <Grid>
        <Button variant="outlined">Button 3</Button>
      </Grid>
    </Grid>
  );
}
