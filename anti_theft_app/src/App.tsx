import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AppPage from "./Pages/AppPage";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box bgcolor={"ghostwhite"} width={"100vw"} height={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
