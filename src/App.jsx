import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// all components
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Moviedetailed from "./Pages/Moviedetailed";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Moviedetailed />} />
      </Routes>
    </div>
  );
}

export default App;
