import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
