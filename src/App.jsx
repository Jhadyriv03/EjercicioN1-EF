import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import AboutScreen from "./screens/about_screen/AboutScreen";
import DashboardScreen from "./screens/dashboard_screen/DashboardScreen";
import HeaderScreen from "./screens/header_screen/HeaderScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen/>} />
      <Route path="/dashboard" element={<DashboardScreen/>} />
      <Route path="/header" element={<HeaderScreen />} />
    </Routes>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
