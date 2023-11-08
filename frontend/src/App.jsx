import "./App.css";
import Test from "./components/Test";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
