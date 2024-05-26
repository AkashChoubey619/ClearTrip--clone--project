import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import AirplaneIcon from '@mui/icons-material/AirplanemodeActive';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';

export default function OfferRightNav() {
    const [topIcon,setTopIcon]=useState('flight');
    const formStyle = {
        display: 'block',
        fontWeight: 500,
        fontSize: '14px', paddingTop: '8px'
    }
    const selectStyle = {
        width: '62px', 
        padding: '2px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };
    return (
        <div style={{ position: 'fixed', marginTop: 8, width: '21%',boxShadow:'0px 0px 2px lightgrey' }}>
            <Box sx={{ background: 'white', padding: '15px 18px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                    <Box onClick={()=>setTopIcon('flight')} sx={topIcon === 'flight'?{padding: '6px 8px', borderRadius: '6px 6px 0px 0px', background: '#fc0' }:
                    { padding: '6px 8px', borderRadius: '6px 6px 0px 0px','&:hover':{background:'#fae077'},cursor:'pointer' }} >
                        <AirplaneIcon sx={{ transform: 'rotate(45deg)' }} />
                    </Box>
                    <Box onClick={()=>setTopIcon('hotel')} sx={topIcon === 'hotel'?{ padding: '6px 8px', borderRadius: '6px 6px 0px 0px', background: '#fc0' }
                    :{ padding: '6px 8px', borderRadius: '6px 6px 0px 0px','&:hover':{background:'#fae077'},cursor:'pointer' }}>
                        <LocalHotelIcon />
                    </Box>
                </Box>
                <Box sx={{ background: '#fc0', padding: '5px', borderRadius: '0px 6px 6px 6px' }}>
                    <Typography sx={{ fontSize: '1.4em' }} variant='h6' >{topIcon==='hotel'?'Search hotel':'Search flights'}</Typography>
                </Box>
                <Box>
                   {topIcon==='flight'?<form>
                        <Typography sx={{ fontSize: '15px', fontWeight: 500, pt:1 }}><input type='radio' checked />One way</Typography>
                        <Box>
                            <label style={formStyle} htmlFor='from'>From</label>
                            <input type='text' style={{padding:'5px'}} id='from' placeholder="Enter any city or airport" />
                            <label style={formStyle} htmlFor='to'>To</label>
                            <input type='text' id='to' style={{padding:'5px'}} placeholder="Enter any city or airport" />
                            <label style={formStyle} htmlFor='depart'>Depart on</label>
                            <input type='date' style={{padding:'5px',color:'orange'}} id='depart' placeholder="From" />
                            <label style={formStyle} htmlFor='return'>Return on</label>
                            <input type='date' style={{padding:'5px',color:'orange'}} id='return' placeholder="From" />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%',mt:1 }}>
                                <Box>
                                    <label style={formStyle} htmlFor='selectAdult'>Adult</label>
                                    <select id='selectAdult' name='adults' style={selectStyle}>
                                        {[...Array(8).keys()].map((value) => (
                                            <option key={value} value={value + 1}>{value + 1}</option>
                                        ))}
                                    </select>
                                    <Typography sx={{ fontSize: '12px', color: 'grey' }}>&gt; 12 yrs</Typography>
                                </Box>
                                <Box>
                                    <label style={formStyle} htmlFor='selectChildren'>Children</label>
                                    <select id='selectChildren' name='children' style={selectStyle}>
                                        {[...Array(8).keys()].map((value) => (
                                            <option key={value} value={value + 1}>{value + 1}</option>
                                        ))}
                                    </select>
                                    <Typography sx={{ fontSize: '12px', color: 'grey' }}>2 - 11 yrs</Typography>
                                </Box>
                                <Box>
                                    <label style={formStyle} htmlFor='selectInfants'>Infants</label>
                                    <select id='selectInfants' name='infants' style={selectStyle}>
                                        {[...Array(8).keys()].map((value) => (
                                            <option key={value} value={value + 1}>{value + 1}</option>
                                        ))}
                                    </select>
                                    <Typography sx={{ fontSize: '12px', color: 'grey' }}>&lt; 2 yr</Typography>
                                </Box>
                                
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                                    <button style={{padding:'8px 10px',cursor:'pointer',fontWeight:500,marginTop:'8px'
                                    ,color:'white',background:'#f86810',border:'none',borderRadius:'4px'}}>
                                        Search flight
                                    </button>
                                </Box>
                        </Box>
                    </form>:
                    <form>
                        {/* hotel form starts from here */}
                    <Box>
                        <label style={formStyle} htmlFor='from'>City</label>
                        <input type='text' style={{padding:'5px'}} id='from' placeholder="Enter your destination" />
                        
                        <label style={formStyle} htmlFor='checkIn'>Check in</label>
                        <input type='date' style={{padding:'5px',color:'orange'}} id='checkIn'/>
                        <label style={formStyle} htmlFor='checkOut'>Check out</label>
                        <input type='date' style={{padding:'5px',color:'orange'}} id='checkOut' />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%',mt:1 }}>
                            <Box>
                                <label style={formStyle} htmlFor='selectAdult'>Adult</label>
                                <select id='selectAdult' name='adults' style={selectStyle}>
                                    {[...Array(8).keys()].map((value) => (
                                        <option key={value} value={value + 1}>{value + 1}</option>
                                    ))}
                                </select>
                                <Typography sx={{ fontSize: '12px', color: 'grey' }}>&gt; 12 yrs</Typography>
                            </Box>
                            <Box>
                                <label style={formStyle} htmlFor='selectChildren'>Children</label>
                                <select id='selectChildren' name='children' style={selectStyle}>
                                    {[...Array(8).keys()].map((value) => (
                                        <option key={value} value={value + 1}>{value + 1}</option>
                                    ))}
                                </select>
                                <Typography sx={{ fontSize: '12px', color: 'grey' }}>2 - 11 yrs</Typography>
                            </Box>
                            
                        </Box>
                        <Box sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                                <button style={{padding:'8px 10px',cursor:'pointer',fontWeight:500,marginTop:'8px'
                                ,color:'white',background:'#f86810',border:'none',borderRadius:'4px'}}>
                                    Search flight
                                </button>
                            </Box>
                    </Box>
                </form>
                    }
                </Box>
            </Box>

        </div>
    )
}
