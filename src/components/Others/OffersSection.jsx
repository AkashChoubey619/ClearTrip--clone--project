import { Button, Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { usePeopleContext } from '../../Context/MainContext'

export default function OffersSection() {
    const { offerNavigation } = usePeopleContext();
    const [headerText, setHeaderText] = useState('')
    const [loading, setLoading] = useState(false)
    const navText = offerNavigation;
    const [offers, setOffers] = useState([]);
    console.log(offerNavigation, offers, navText);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const fetchOfferData = async () => {
        setLoading(true);
        if (navText === 'allOffer') {
            const response = await fetch(` https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=40`,
                {
                    method: 'GET',
                    headers: {
                        "projectID": "iwf86zcsd7tk",

                    }
                }
            )
            if (response.ok) {
                const data = await response.json();
                setOffers(data.data.offers);
                console.log(data.data.offers, "all");
                setHeaderText('All offers')
            }
            else {
                console.log('offerAPI_error', response)
            }
            setLoading(false)
        }
        else if (navText === 'flight') {
            setLoading(true)
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?search={"type":"flight"}`,
                {
                    method: 'GET',
                    headers: {
                        "projectID": "iwf86zcsd7tk",

                    }
                }
            )
            if (response.ok) {
                const data = await response.json();
                setOffers(data.data.offers);
                console.log(data.data.offers, "Flight Data");
                setHeaderText('Flight offers')
            }
            else {
                console.log('flightAPI_error', response)
            }
            setLoading(false)
        }
        else if (navText === 'hotel') {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?search={"type":"hotel"}`,
                {
                    method: 'GET',
                    headers: {
                        "projectID": "iwf86zcsd7tk",

                    }
                }
            )
            if (response.ok) {
                const data = await response.json();
                setOffers(data.data.offers);
                console.log(data.data.offers, "hotel");
                setHeaderText('Hotel offers')
            }
            else {
                console.log('hotelAPI_error', response)
            }
            setLoading(false)
        }
        else if (navText === 'cabs') {
            setLoading(true)
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?search={"type":"cabs"}`,
                {
                    method: 'GET',
                    headers: {
                        "projectID": "iwf86zcsd7tk",

                    }
                }
            )
            if (response.ok) {
                const data = await response.json();
                setOffers(data.data.offers);
                console.log(data.data.offers, "cabs");
                setHeaderText('Cabs offer')
            }
            else {
                console.log('cabAPI_error', response)
            }
            setLoading(false)
        }
        else if (navText === 'other' || navText === 'mobile') {
            setLoading(true)
            const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?search={"type":"all"}`,
                {
                    method: 'GET',
                    headers: {
                        "projectID": "iwf86zcsd7tk",

                    }
                }
            )
            if (response.ok) {
                const data = await response.json();
                setOffers(data.data.offers);
                console.log(data.data.offers, "mobile");
                navText === 'other' ? setHeaderText("Activities") : setHeaderText("For Mobile");
            }
            else {
                console.log('otherOffersAPI_error', response)
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOfferData()
    }, [offerNavigation])

    return (
        <div>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>
                    <ErrorIcon sx={{ display: 'block', mt: 3, fontSize: 120, color: 'lightgrey' }} />
                </Box>
            </Box> :
                (<Box>
                    <Typography sx={{ fontWeight: 500, m: '18px 6px' }} variant='h5'>{headerText}</Typography>
                    <Grid container spacing={2}>
                        {console.log(offers, 'fetchedData')}
                        {offers && offers.map((offer) => (
                            <Grid sx={{ pr: 1 }} item xs={12} sm={6} key={offer._id}>
                                <Card sx={{ minHeight: '420px' }}>
                                    <CardMedia
                                        component="img"
                                        alt={offer.title}
                                        height="auto"
                                        image={offer.heroUrl}
                                    />
                                    <CardContent className='cardContent'>
                                        <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#333' }}>{offer.pTl}</Typography>
                                        <Typography sx={{ fontSize: '14px', color: '#666', py: 1 }}>{offer.pTx}</Typography>
                                        <Button onClick={handleClick} sx={{
                                            background: ' #69c', borderRadius: '6px', '&:hover': { background: 'purple' }, my: 2,
                                            textTransform: 'none', color: 'white'
                                        }} size="small" color="primary" >Know more</Button>
                                        
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                        )}
                    </Grid>
                    <Snackbar
                                            open={open}
                                            autoHideDuration={6000}
                                            onClose={handleClose}
                                            message="Can't view  this offer right now!"
                                            action={action}
                                        />
                </Box>)}
        </div>
    )
}
