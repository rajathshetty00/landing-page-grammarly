import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme, width, height }) => ({
  width,
  height,
  borderRadius: theme.spacing(2),
}));

export default function MuiPaper({
  children, ...props
}) {
  return (
    <Item {...props}>
      {children}
    </Item>

  );
}
