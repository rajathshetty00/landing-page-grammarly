import { Box } from '@mui/material';
import MuiHorizontalProgressBar from 'components/common/MuiHorizontalProgressBar';
import MuiPaper from 'components/common/MuiPaper';
import MuiTypography from 'components/common/MuiTypography';
import Spacer from 'components/common/Spacer';
import React from 'react';
import theme from 'theme';
import details from '../utils/dummy';

function TopDetailSection() {
  return (
    <Box
      elementType="div"
      sx={{
        display: 'grid',
        width: '80%',
        margin: '0 auto',
        gridTemplateColumns: '1.25fr 0.75fr',
        gap: '8px',
        justifyContent: 'start',
        textAlign: 'left',
      }}
    >
      <div>
        <Box
          elementType="div"
          sx={{ position: 'relative' }}
        >
          <MuiPaper elevation={24} height={250} width="fit-content">
            <img
              alt="xyz"
              width="100%"
              height="100%"
              src="https://static.grammarly.com/assets/files/1495248700340626177a3f4fb713a94d/writing_sample.svg"
            />
          </MuiPaper>
          <Box
            elementType="div"
            sx={{
              position: 'absolute', top: '76%', left: '10%',
            }}
          >
            <MuiPaper elevation={24} width="fit-content" height="fit-content">
              <img
                alt="xyz"
                width="100%"
                height="100%"
                src="https://static.grammarly.com/assets/files/32847965b20166d16b376b3f97d7ad65/grammarly_suggestion.svg"
              />
            </MuiPaper>
          </Box>
        </Box>
      </div>
      <div>

        {details.map(({ id, textOne, textTwo }) => (
          <div key={id}>
            <MuiTypography variant="p" fontWeight={theme.typography.fontWeightBold} color={theme.palette.secondary.main}>
              {textOne}
            </MuiTypography>
            <MuiTypography variant="subtitle1" color={theme.palette.text.secondary}>
              {textTwo}
            </MuiTypography>
            <Spacer size={8} />
            <MuiHorizontalProgressBar
              thickness="2.5px"
              variant="determinate"
              linearbackground="shadeOfGrey"
            />
            <Spacer size={24} />
          </div>
        ))}
      </div>
    </Box>
  );
}

export default TopDetailSection;
