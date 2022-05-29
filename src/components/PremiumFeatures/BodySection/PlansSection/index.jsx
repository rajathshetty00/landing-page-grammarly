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
    <Box sx={{
      padding: {
        xs: theme.spacing(0, 1),
        sm: 0,
      },
    }}
    >
      <Spacer sx={{ height: theme.spacing(1) }} />
      <MuiTypography variant="h3">{bodyTitle}</MuiTypography>
      <Spacer sx={{
        height: {
          xs: theme.spacing(1),
          sm: theme.spacing(2),
        },
      }}
      />
      <MuiTypography
        variant="body2"
        fontWeight={theme.typography.fontWeightRegular}
      >
        {bodySubTitle}
      </MuiTypography>
      <Spacer sx={{
        height: {
          xs: theme.spacing(7),
          sm: theme.spacing(8),
        },
      }}
      />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
        },
        gap: {
          xs: theme.spacing(7),
          sm: theme.spacing(2),
        },
        width: {
          xs: '80%',
          sm: '60%',
        },
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
            <Spacer sx={{ height: theme.spacing(0.5) }} />
            <MuiTypography variant="h4">{type}</MuiTypography>
            <Spacer sx={{ height: theme.spacing(0.5) }} />
            <MuiTypography
              sx={{
                lineHeight: {
                  xs: '22px', sm: '20px',
                },
              }}
              variant="p"
              component="p"
            >
              {subtitle}

            </MuiTypography>
            <Spacer sx={{
              height: {
                xs: theme.spacing(btnSpacing / 12),
                sm: theme.spacing(btnSpacing / 8),
              },
            }}
            />
            <MuiButton disabled={isBtnDisabled} variant="contained" width={280} color="primary">
              {btnText}
            </MuiButton>
            <Spacer sx={{ height: theme.spacing(3) }} />
            {moreDetails.map(({
              subId, image, titleText, Heading,
            }) => (
              <li key={subId} style={{ listStyleImage: 'url(\'https://static.grammarly.com/assets/files/3252614f5e974a46c75e9035de53011b/checkmark.svg\')' }}>
                {
                  titleText ? (
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
                  ) : (
                    <Typography sx={{ pb: theme.spacing(0.25), cursor: 'pointer' }} border="1" variant="span" fontWeight={theme.typography.fontWeightBold}>
                      {Heading}
                    </Typography>
                  )
                }
                <Spacer sx={{ height: theme.spacing(0.5) }} />
              </li>
            ))}
          </div>
        ))}

      </Box>
    </Box>
  );
}

export default PlansSection;
