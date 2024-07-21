import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import Account from "./components/Account";


axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {

  


  return (
    
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<Account/>} />
          <Route path="/account/:subpage/:action" element={<Account/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
