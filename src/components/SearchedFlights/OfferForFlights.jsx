import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export default function OffterForFlights() {
  return (
    <div style={{ display: 'flex', alignItems: 'center',gap:'20px',marginBlock:'8px' }}>
      <Box sx={{
        display: 'flex', alignItems: 'center', height: '52px', width: '275px'
        , background: 'rgb(236, 248, 244)', p: '10px 16px', borderRadius: '12px',gap:'15px'
      }}>
        <img src='https://fastui.cltpstatic.com/image/upload/offermgmt/images/bank-logos/svg/CT_offer.png' width={'30px'} alt='bank-image' />
        <Box >
          <Typography sx={{fontSize:'14px',fontWeight:500}}>
            Flat 10% off
          </Typography>
          <Typography sx={{ fontSize: '10px', fontWeight: 500 ,display: 'flex', alignItems: 'center',gap:'8px',color:'grey'}}>
            <span style={{ fontWeight: 500, fontSize: '12px' }}>CTMAHI</span><Divider orientation='vertical' flexItem />
            Applicable on all payments
          </Typography>
        </Box>

      </Box>

      <Box sx={{
        display: 'flex', alignItems: 'center', height: '52px', width: '275px'
        , background: 'rgb(236, 248, 244)', p: '10px 16px', borderRadius: '12px',gap:'15px'
      }}>
        <img src='https://fastui.cltpstatic.com/image/upload/offermgmt/images/bank-logos/svg/SBI.svg' width={'30px'} alt='bank-image' />
        <Box >
          <Typography sx={{fontSize:'14px',fontWeight:500}}>
            Flat 8% off
          </Typography>
          <Typography sx={{ fontSize: '10px', fontWeight: 500,display: 'flex', alignItems: 'center',gap:'8px',color:'grey' }}>
            <span style={{ fontWeight: 500, fontSize: '12px' }}>SBICC</span><Divider orientation='vertical' flexItem />
            with sbi credit card
          </Typography>
        </Box>

      </Box>
      <Box sx={{
        display: 'flex', alignItems: 'center', height: '52px', width: '275px'
        , background: 'rgb(236, 248, 244)', p: '10px 16px', borderRadius: '12px',gap:'15px'
      }}>
        <img src='	https://fastui.cltpstatic.com/image/upload/offermgmt/images/bank-logos/svg/OneCard.svg' width={'30px'} alt='bank-image' />
        <Box >
          <Typography sx={{fontSize:'14px',fontWeight:500}}>
            Flat 8% off + 3 month EMI
          </Typography>
          <Typography sx={{ fontSize: '10px', fontWeight: 500,display: 'flex', alignItems: 'center',gap:'8px',color:'grey'  }}>
            <span style={{ fontWeight: 500, fontSize: '12px' }}>ONECARDEMI</span><Divider orientation='vertical' flexItem />
            With oneCard credit card
          </Typography>
        </Box>

      </Box>



    </div>
  )
}
