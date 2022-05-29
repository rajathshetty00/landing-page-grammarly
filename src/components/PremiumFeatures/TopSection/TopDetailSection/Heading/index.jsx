import React from 'react';
import { Box } from '@mui/material';
import MuiTypography from 'components/common/MuiTypography';
import MuiButton from 'components/common/MuiButton';
import Spacer from 'components/common/Spacer';

function Heading() {
  return (
    <Box sx={{
      display: 'flex',
      width: '80%',
      flexDirection: 'column',
      margin: '0 auto',
      alignItems: 'center',
    }}
    >
      <MuiTypography variant="h2" component="h1" fontWeight={700}>
        Aim High With Brilliant Writing
      </MuiTypography>
      <Spacer size={16} />
      <MuiButton width="fit-content" variant="contained" color="primary">
        Uprade to grammarly premium
      </MuiButton>
    </Box>
  );
}

export default Heading;
