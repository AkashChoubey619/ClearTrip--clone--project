import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageOne from '../Assets/slideImg1.webp'
import ImageTwo from '../Assets/slideImg2.webp'
import ImageThree from '../Assets/slideImg3.webp'
import ImageFour from '../Assets/slideImg4.webp'
import ImageFive from '../Assets/slideImg5.webp'
import ImageSix from '../Assets/slideImg6.webp'
import './Styles.css'
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function RightSection() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const images = [
            ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix
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
                    <div>
                        <img src={ImageThree} alt="ImageThree" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={ImageFour} alt="ImageFour" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={ImageFive} alt="ImageFive" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={ImageSix} alt="ImageSix" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
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
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >FLY91 Launch Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Get up to Rs. 2,000 off on newly launched Fly91 Flights!</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code CTFLY91</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Qantas Airways Special Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Exclusive fares + extra ₹10,000 off on Qantas flights!</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code CTQANTAS</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Air India Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Up to ₹2,500 off on Air India Domestic Flight Bookings!</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code CTAISPL</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >Domestic Flight Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Get up to ₹5,000 off on Domestic Flights</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code CTFLY</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>

                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >MobiKwik Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Flat ₹555 off on Flights & Hotels with MobiKwik</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code CTMBK24</Typography>
                            <Link style={{ textDecoration: 'none', color: '#36c', marginBlock: '6px' }}>
                                <Typography variant='p' sx={{ fontSize: '15px', color: '#36c', fontWeight: 600 }} >Know more</Typography></Link>
                            <div style={{ height: '40px' }}></div>
                        </div>
                        <div >
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, marginBlock: '8px' }} >International Flight Offer!</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, marginBlock: '6px' }} >Get up to ₹25,000 off on International Flights</Typography>
                            <Typography sx={{ fontSize: '14px', color: 'grey', marginBlock: '7px' }} >Use Coupon code INTFLY</Typography>
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
