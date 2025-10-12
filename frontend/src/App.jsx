import React from "react";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/loginForm";
import AuthPage from "./pages/AuthPage";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/NavBar";

const App =() => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;