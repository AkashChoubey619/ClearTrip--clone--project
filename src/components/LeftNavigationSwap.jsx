import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText  } from '@mui/material'
import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import TrainIcon from '@mui/icons-material/Train';
import EventIcon from '@mui/icons-material/Event';
import MoreIcon from '@mui/icons-material/More';
import Typography from '@mui/material/Typography';

export default function LeftNavigation({ isOpen, onClose }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <List>
        <ListItem button>
          <ListItemIcon>
            <FlightIcon />
          </ListItemIcon>
          <ListItemText  primary="Flights" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Hotels" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrainIcon />
          </ListItemIcon>
          <ListItemText primary="Trains" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Activities" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MoreIcon />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
      </List>
    </Drawer>
  )
}
