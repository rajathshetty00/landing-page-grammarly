import { Box, LinearProgress, styled } from '@mui/material';
import React from 'react';

function MuiHorizontalProgressBar({ progress, ...props }) {
  const CustomLinearProgress = styled(LinearProgress)(({
    theme, thickness, linearbackground,
  }) => ({
    height: thickness,
    background: theme.palette.text[linearbackground],
    '& .MuiLinearProgress-bar': {
      background: theme.palette.common.black,
      transition: '1s ease',
      transitionDelay: '0.5s',
    },
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <CustomLinearProgress
        {...props}
        value={progress}
      />
    </Box>
  );
}

export default MuiHorizontalProgressBar;
