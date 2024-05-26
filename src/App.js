
import LeftSection from "./components/LeftNavigation";
import Flight from "./Pages/SearchForFlight";
import Hotel from "./Pages/SearchForHotel";
import Bus from "./Pages/SearchForBus";
import { Stack } from '@mui/material'
import Navigation from "./components/Navigation";
import React, { useState } from 'react'
import { MainContext } from './Context/MainContext';
import LeftNavigationSwap from './components/LeftNavigationSwap';
import MenuIcon from '@mui/icons-material/Menu';
import SearchForFlight from './Pages/SearchForFlight';
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import SearchedFlights from "./Pages/SearchedFlights";
import SearchedHotels from "./Pages/SearchedHotels";
import Offers from "./Pages/Offers";
import SelectedHotel from "./Pages/SelectedHotel";
import PaymentHotel from "./Pages/PaymentHotel";
import PaymentFlight from "./Pages/PaymentFlight";
import NotFound from "./Pages/NotFound";
import ThankYou from "./Pages/ThankYou";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <BrowserRouter>
      <Box sx={{ width: '100vw' }} >
        <MainContext>
          <Routes>
            {/* <Route path="/" index element={<HomePage/>} /> */}
            <Route path="/" index element={<Flight />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/searchedFlight" element={<SearchedFlights />} />
            <Route path="/searchedHotel" element={<SearchedHotels />} />
            <Route path="/selectedHotel" element={<SelectedHotel />} />
            <Route path="/selectedHotel" element={<SelectedHotel />} />
            <Route path="/paymentHotel" element={<PaymentHotel />} />
            <Route path="/paymentFlight" element={<PaymentFlight />} />
            <Route path="/confirmedPayment" element={<ThankYou />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </MainContext>
      </Box>
    </BrowserRouter>
  )
}

export default App;
