import React from 'react';
import { styled } from '@mui/material/styles';
import Spacer from 'components/common/Spacer';
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
  }));

  return (
    <Item>
      <Heading />
      <Spacer size={64} />
      <TopDetailSection />
    </Item>
  );
}

export default TopSection;
