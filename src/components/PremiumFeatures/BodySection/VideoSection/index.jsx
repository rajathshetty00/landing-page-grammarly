import { Box, styled } from '@mui/material';
import MuiTypography from 'components/common/MuiTypography';
import Spacer from 'components/common/Spacer';
import React from 'react';
import myTheme from 'theme';

function VideoSection() {
  const Div = styled('div')(({ theme }) => ({
    background: 'no-repeat right -300px bottom -70px url(https://static.grammarly.com/assets/files/de31835f4f228f5ffb03a8a527a44413/swoosh.png)',
    padding: theme.spacing(12, 0, 12, 0),
    backgroundColor: theme.palette.common.blue900,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 0, 8, 0),
      background: 'no-repeat right -200px bottom -50px url(https://static.grammarly.com/assets/files/dd0e87cc2bdc870fce2dc3c4cb554dd1/mobile_swoosh.png)',
      backgroundColor: theme.palette.common.blue900,
    },
  }));

  return (
    <Div>
      <Box sx={{
        display: 'flex',
        width: '80%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: {
          xs: 'center', sm: 'left',
        },
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
      >
        <Box sx={{ mr: myTheme.spacing(4) }}>
          <MuiTypography variant="h4" color={myTheme.palette.common.white} fontWeight={myTheme.typography.fontWeightBold}>
            Get the Job Done
          </MuiTypography>
          <Spacer sx={{
            height: myTheme.spacing(1.5),
          }}
          />
          <MuiTypography variant="body2" fontWeight={myTheme.typography.fontWeightRegular} color={myTheme.palette.common.white}>
            Effective communication is the key to making
            things happen.
          </MuiTypography>
          <Spacer sx={{
            height: {
              xs: myTheme.spacing(3),
              sm: 0,
            },
          }}
          />
        </Box>
        <div>
          <picture>
            <source
              media="(min-width: 599px)"
              srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/6f97131f829f8d0031bf8fa65c0a3f5d/video@2x.png 2x"
            />
            <source
              media="(min-width: 499px)"
              srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png 2x"
            />
            <img
              src="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png"
              srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png 2x"
              alt="Video Thumbnail"
              style={{ borderRadius: '6px' }}
            />
          </picture>

        </div>

      </Box>

    </Div>
  );
}

export default VideoSection;
