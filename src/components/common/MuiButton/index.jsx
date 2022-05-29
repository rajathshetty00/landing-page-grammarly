import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

function MuiButton({ children, width, ...props }) {
  const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(0.75),
    padding: theme.spacing(1.5, 3),
    fontFamily: '"Inter",  sans-serif',
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    width,
    color: theme.palette.common.white,
    background: theme.palette.primary.dark,
    '&:hover': {
      boxShadow: 'none',
      background: theme.palette.primary.main,
    },
    '&:disabled': {
      background: theme.palette.primary.disabled,
      color: theme.palette.primary.disabledText,
      cursor: 'no-drop',
    },

  }));

  return (

    <CustomButton {...props}>
      {children}
    </CustomButton>

  );
}

export default MuiButton;
