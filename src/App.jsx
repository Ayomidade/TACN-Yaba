import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"

function App() {
  return (
    <AppRoutes/>
    // <Router>
    //   <Navbar />
    //   <main style={{ padding: "2rem" }}>
    //     <AppRoutes />
    //   </main>
    //   <Footer />
    // </Router>
  );
}

export default App;
