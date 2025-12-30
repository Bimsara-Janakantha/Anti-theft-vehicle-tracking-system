import { Box } from "@mui/material";
import Logo from "../Assets/logo.png";
import MapView from "../Components/LeafletMap";

export default function Map() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          height: "90px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
      >
        <img
          src={Logo}
          alt="App Logo"
          style={{
            height: "80px",
            backgroundColor: "white",
            margin: "0 10px",
            borderRadius: "8px",
            opacity: "80%",
          }}
        />
      </Box>
      <Box sx={{ height: "100vh", width: "100%", bgcolor: "gray" }}>
        <MapView />
      </Box>
    </Box>
  );
}
