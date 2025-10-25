import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}

export default App;
