import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilForm from "./components/profileFormPage/ProfilForm";
import Footer from "./components/footer/footer";
import HomePage from "./homepage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilForm />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
