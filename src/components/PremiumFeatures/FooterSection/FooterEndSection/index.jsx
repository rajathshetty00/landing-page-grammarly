import { styled } from '@mui/material';
import MuiButton from 'components/common/MuiButton';
import MuiTypography from 'components/common/MuiTypography';
import Spacer from 'components/common/Spacer';
import React from 'react';
import mytheme from 'theme';
import footerDetails from '../utils/dummy';

function FooterEndSection() {
  const {
    footerEndHeader,
    footerEndSubHeader,
    footerEndBtnText,
  } = footerDetails;

  const Item = styled('div')(() => ({
    background: 'no-repeat left -200px bottom -90px url(https://static.grammarly.com/assets/files/7704056c286a7b6b242f7f6839113502/swoosh.png)',
    minHeight: '492px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }));

  return (
    <Item>
      <MuiTypography component="h1" variant="h1">
        {footerEndHeader}
      </MuiTypography>
      <Spacer size={16} />
      <MuiTypography variant="body2" fontWeight={mytheme.typography.fontWeightRegular}>
        {footerEndSubHeader}
      </MuiTypography>
      <Spacer size={24} />
      <MuiButton>
        {footerEndBtnText}
      </MuiButton>

    </Item>
  );
}

export default FooterEndSection;
