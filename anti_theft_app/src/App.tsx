import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Map from "./Pages/Map";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box bgcolor={"ghostwhite"} width={"100vw"} height={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/msg" element={<Message />} />
          <Route path="/map" element={<Map />} />
          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
