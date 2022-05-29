import React from 'react';
import { styled } from '@mui/material/styles';
import Spacer from 'components/common/Spacer';
import mytheme from 'theme';
import TopDetailSection from './TopDetailSection';
import Heading from './TopDetailSection/Heading';

function TopSection() {
  const Item = styled('div')(({ theme, width }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    width,
    height: '100vh',
    paddingTop: theme.spacing(4),
    background: 'no-repeat left -150px top -80px url(https://static.grammarly.com/assets/files/06666c30f97cce25ac1cf1c4573332c2/swoosh.png)',
    [theme.breakpoints.down('sm')]: {
      height: 'unset',
    },
  }));

  return (
    <Item>
      <Heading />
      <Spacer sx={{
        height: {
          xs: mytheme.spacing(3),
          sm: mytheme.spacing(8),
        },
      }}
      />
      <TopDetailSection />
    </Item>
  );
}

export default TopSection;
