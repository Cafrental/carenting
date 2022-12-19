import "./App.css";
import { useState } from "react";
import CarCards from "./components/CarCards";
import FrontPage from "./components/FrontPage";
import AddCarForm from "./components/AddCarForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full font-MinionProMedium">
      <FrontPage />
      <CarCards />
      <Footer />
    </div>
  );
}

export default App;
