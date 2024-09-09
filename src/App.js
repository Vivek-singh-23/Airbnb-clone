import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import PlacesPage from "./components/PlacesPage";
import PlacesFormPage from "./components/PlacesFormPage";
import { Index } from "./components/Index";
import { PlacePage } from "./components/PlacePage";
import { BookingsPage } from "./components/BookingsPage";
import { BookingPage } from "./components/BookingPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {

  return (
    
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage/>} />
          <Route path="/account/places" element={<PlacesPage/>} />
          <Route path="/account/places/new" element={<PlacesFormPage/>} />
          <Route path="/account/places/:id" element={<PlacesFormPage/>} />
          <Route path="/place/:id" element={<PlacePage/>}/>
          <Route path="/account/bookings" element={<BookingsPage/>}/>
          <Route path="/account/bookings/:id" element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
