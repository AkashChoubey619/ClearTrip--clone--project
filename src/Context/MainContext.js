import React, { createContext, useState, useContext } from 'react';

// Create the context
const Content = createContext();

// Provider component
export const MainContext = ({ children }) => {
    const [navigate, setNavigate] = useState('flight');
    const [offerNavigation,setOfferNavigation]=useState('allOffer');
    const [flightId,setFlightId]=useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [hotelModal, setHotelModal] = useState(false);
    const [hotelData, setHotelData] = useState([])

    return (
        <Content.Provider value={{ navigate, setNavigate,offerNavigation,setOfferNavigation,hotelData, setHotelData,
            flightId,setFlightId,openModal,setOpenModal,hotelModal, setHotelModal}}>
            {children}
        </Content.Provider>
    );
};

// Custom hook to consume the context
export const usePeopleContext = () => useContext(Content);