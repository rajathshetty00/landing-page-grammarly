import { styled, Typography } from '@mui/material';
import React from 'react';

function MuiTypography({ children, color, ...props }) {
  const CustomTypograhy = styled(Typography)(() => ({
    color,
  }));

  return (
    <CustomTypograhy {...props}>
      {children}
    </CustomTypograhy>
  );
}

export default MuiTypography;
