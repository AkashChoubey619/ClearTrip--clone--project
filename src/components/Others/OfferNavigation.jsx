import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleSharp';
import { Link, useNavigate } from 'react-router-dom';
import HeadLogo from '../../Assets/clearTrip_page_logo.png'
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import Trips from '@mui/icons-material/CardTravelTwoTone';
import ShortList from '@mui/icons-material/FavoriteTwoTone';
import Traveler from '@mui/icons-material/AirportShuttleTwoTone';
import Wallet from '@mui/icons-material/AccountBalanceWalletTwoTone';
import HiiFive from '@mui/icons-material/WavingHandTwoTone';
import ExpressWay from '@mui/icons-material/PublishTwoTone';
import Profile from '@mui/icons-material/PersonOutlineTwoTone';
import Settings from '@mui/icons-material/SettingsTwoTone';
import Cancel from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import ChangeFlight from '@mui/icons-material/ShuffleTwoTone';
import Print from '@mui/icons-material/ReceiptOutlined';
import { styled } from '@mui/system';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';

export default function OfferNavigation() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const token = localStorage.getItem('token')
    const navigate=useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                background:'#f1f1f1',
                alignItems: 'center',
                boxShadow: '0px 0px 10px #e5eaf2', // Just for demonstration purposes
                padding: '7px 7%'

            }} >
                <Box onCLick={()=>navigate('/')} sx={{ display: 'flex', alignItems: 'center', gap: '2px',cursor:'pointer' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '200px',
                    }}>
                        <img src='	https://www.cleartrip.com/offers/sites/default/files/logo.png' style={{ width: '100%', borderRadius: '1px' }} alt='clearTrip_logo' />
                    </div>
                </Box>

            </Box>
        </>
    )
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const ListName = {
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px'

}

const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 240px;
    border-radius: 8px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    z-index: 1;
  
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
    `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);

    if (popupContext == null) {
        throw new Error(
            'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
        );
    }

    const verticalPlacement = popupContext.placement.split('-')[0];

    return (
        <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
        >
            <Listbox {...other} ref={ref} />
        </CssTransition>
    );
});

AnimatedListbox.propTypes = {
    ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    display:flex;
    alignItems:center;
    
    padding: 5px;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    `,
);

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 8px;
    color: white;
    text-transform: none;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: none;
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
);
