import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageOne from '../Assets/busImg/slideBusImg1.webp'
import ImageTwo from '../Assets/busImg/slideBusImg2.webp'
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function RightSectionBus() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const images = [
            ImageOne, ImageTwo
        ];
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                setImagesLoaded(true);
            }
        };

        images.forEach(image => {
            const img = new Image();
            img.onload = handleImageLoad;
            img.src = image;
        });
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500, // Set autoplay speed (milliseconds)
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
                    {dots.map((dot, index) => (
                        <li key={index} style={{ display: 'inline-block', color: 'white', margin: '0 5px' }}>
                            {dot}
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
    const settingsMoreOffer = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '0px', width: '100%' }}>
                <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
                    {dots.map((dot, index) => (
                        <li key={index} style={{ display: 'inline-block', color: 'black', margin: '0 5px' }}>
                            {dot}
                        </li>
                    ))}
                </ul>
            </div>
        )
    };


    return (
        <div style={{ maxWidth: '250px', margin: '0 auto' }}>
            {imagesLoaded && (
                <Slider {...settings}>
                    <div>
                        <img src={ImageOne} alt="imageOne" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={ImageTwo} alt="imageTwo" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div> 

                </Slider>)}
            <Box>
                <div className='moreOffer' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlock: '23px' }}>
                    <Typography variant='h6' >More offers</Typography>
                    <Link style={{ textDecoration: 'none', color: '#36c' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>View all</Typography></Link>
                </div>
                <div style={{ padding: '25px', boxShadow: '0px 0px 2px grey', borderRadius: '12px' }}>
                    <Slider className='moreOffers' {...settingsMoreOffer}>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Get 10% off on Buses</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Max Discount ₹200/- on bookings above 2000/-</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Get upto 500 discount</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Minimum booking amount - 750</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Code-CTBUS</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Get 1000rs off on Orange Tours Buses at Cleartrip</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >No min Order value</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Code-CTORANGE</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Flat 10% discount on AU Credit Cards</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Max disc - 500/-</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Code-AUCC</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Up to ₹200 off on bus bookings with Mobikwik</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Offer Valid for Mobikwik Wallet</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Code-CTMBK24</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>
                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Flat 10% off on bus bookings with Federal Bank</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Debit Card valid Offer valid on Wednesday</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Code-FEDDC</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '35px' }}></div>
                        </div>

                    </Slider>
                </div>
            </Box>
        </div>
    );
}
