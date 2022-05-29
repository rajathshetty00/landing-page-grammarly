import { Box } from '@mui/material';
import React from 'react';

function Spacer({
  children, sx,
}) {
  return (
    <Box
      sx={sx}
    >
      {children}
    </Box>
  );
}

Spacer.defaultProps = {
  axis: '',
  classes: '',
  children: '',
};

export default Spacer;
