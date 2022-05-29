import MuiTypography from 'components/common/MuiTypography';
import React from 'react';
import Spacer from 'components/common/Spacer';
import theme from 'theme';
import { Box, Typography } from '@mui/material';
import MuiButton from 'components/common/MuiButton';
import MuiSpecialTooltip, {
  SpecialTooltipTitle,
} from 'components/common/MuiSpecialTooltip';
import bodyDetails from '../utils/dummy';

function PlansSection() {
  const { bodyTitle, bodySubTitle, plans } = bodyDetails;

  return (
    <div>
      <Spacer size={8} />
      <MuiTypography variant="h3">{bodyTitle}</MuiTypography>
      <Spacer size={16} />
      <MuiTypography
        variant="body2"
        fontWeight={theme.typography.fontWeightRegular}
      >
        {bodySubTitle}
      </MuiTypography>
      <Spacer size={64} />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(2),
        width: '60%',
        margin: '0 auto',
        textAlign: 'left',
        justifyContent: 'center',
      }}
      >
        {plans.map(({
          type, id, role, subtitle, btnText, moreDetails, isBtnDisabled, btnSpacing,
        }) => (
          <div key={id}>
            <MuiTypography variant="subtitle2" color={theme.palette.text.secondary}>{role}</MuiTypography>
            <Spacer size={4} />
            <MuiTypography variant="h4">{type}</MuiTypography>
            <Spacer size={4} />
            <MuiTypography sx={{ lineHeight: '20px' }} variant="p" component="p">{subtitle}</MuiTypography>
            <Spacer size={btnSpacing} />
            <MuiButton disabled={isBtnDisabled} variant="contained" width={280} color="primary">
              {btnText}
            </MuiButton>
            <Spacer size={24} />
            {moreDetails.map(({
              subId, image, titleText, Heading,
            }) => (
              <li key={subId} style={{ listStyleImage: 'url(\'https://static.grammarly.com/assets/files/3252614f5e974a46c75e9035de53011b/checkmark.svg\')' }}>

                <MuiSpecialTooltip
                  title={(
                    <SpecialTooltipTitle
                      imageUrl={image}
                      titleText={titleText}
                    />
)}
                >
                  <Typography sx={{ borderBottom: `1px dashed ${theme.palette.text.shadeOfBlue}`, pb: theme.spacing(0.25), cursor: 'pointer' }} border="1" variant="span" fontWeight={theme.typography.fontWeightMedium}>
                    {Heading}
                  </Typography>
                </MuiSpecialTooltip>
                <Spacer size={4} />
              </li>
            ))}
          </div>
        ))}

      </Box>

    </div>
  );
}

export default PlansSection;
