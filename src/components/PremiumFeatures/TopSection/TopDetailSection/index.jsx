/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box, styled } from '@mui/material';
import MuiHorizontalProgressBar from 'components/common/MuiHorizontalProgressBar';
import MuiPaper from 'components/common/MuiPaper';
import MuiTypography from 'components/common/MuiTypography';
import Spacer from 'components/common/Spacer';
import React from 'react';
import theme from 'theme';
import details from '../utils/dummy';

function TopDetailSection() {
  const [progress] = React.useState(100);

  const [detailItem, setDetailItem] = React.useState(details[0]);

  React.useEffect(() => {
    let timer1;
    // let timer2;
    for (let i = 0; i <= 100; i += 1) {
      // eslint-disable-next-line no-loop-func
      timer1 = setTimeout(() => {
        setDetailItem(details[i % details.length]);
      // timer2 = setInterval(() => {
      //   setProgress((oldProgress) => {
      //     if (oldProgress < 100) {
      //       return oldProgress + 1;
      //     }
      //     clearInterval(timer2);
      //     return 0;
      //   });
      // }, 45);
      }, i * 5000);
    }

    return () => {
      clearInterval(timer1);
    };
  }, []);

  const onClickHandler = (index) => {
    setDetailItem(details[index]);
  };

  const CustomSection = styled('section')`
    cursor: pointer;  
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
    }
    `;

  return (
    <Box
      elementType="div"
      sx={{
        display: 'grid',
        width: '70%',
        margin: '0 auto',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1.25fr 0.75fr',
        },
        gap: '24px',
        justifyContent: 'start',
        textAlign: 'left',
      }}
    >
      <div>
        {/* Card image Desktop style starts */}
        <Box
          elementType="div"
          sx={{
            position: 'relative',
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          <MuiPaper elevation={24} height={250} width="fit-content">
            <img
              alt="pic of item"
              width="100%"
              height="100%"
              src={detailItem.imageOne}
              srcSet={detailItem.imageOne}
            />

          </MuiPaper>
          <Box
            elementType="div"
            sx={{
              position: 'absolute',
              top: '76%',
              left: '10%',
            }}
          >
            <MuiPaper elevation={24} width="fit-content" height="fit-content">
              <img
                alt="xyz"
                width="100%"
                height="100%"
                src={detailItem.imageTwo}
              />
            </MuiPaper>
          </Box>
        </Box>
        {/* Card image Desktop style ends */}

        {/* Card image mobile style starts */}
        <Box
          elementType="div"
          sx={{
            position: 'relative',
            display: {
              xs: 'block',
              sm: 'none',
            },
            textAlign: 'center',
          }}
        >
          {details.map(({
            id, textOne, textTwo, mobileImage,
          }) => (
            <div key={id}>
              <img
                alt="pic of item"
                width="100%"
                height="100%"
                src={mobileImage}
                srcSet={mobileImage}
              />
              <MuiTypography variant="p" fontWeight={theme.typography.fontWeightBold} color={theme.palette.common.black}>
                {textOne}
              </MuiTypography>
              <MuiTypography variant="subtitle1" color={theme.palette.text.secondary}>
                {textTwo}
              </MuiTypography>
              <Spacer sx={{
                height: {
                  xs: theme.spacing(6),
                  sm: theme.spacing(3),
                },
              }}
              />
            </div>
          ))}
        </Box>
        {/* Card image mobile style ends */}
      </div>

      {/* Timer component in desktop starts */}
      <div>
        <Box sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
        >
          {details.map(({ id, textOne, textTwo }, index) => (
            <>
              <CustomSection key={id} role="none" onClick={() => onClickHandler(index)}>
                <MuiTypography variant="p" fontWeight={theme.typography.fontWeightBold} color={theme.palette.secondary.main}>
                  {textOne}
                </MuiTypography>
                <MuiTypography variant="subtitle1" color={theme.palette.text.secondary}>
                  {textTwo}
                </MuiTypography>
                <Spacer sx={{
                  height: theme.spacing(1),
                }}
                />
                <MuiHorizontalProgressBar
                  progress={id === detailItem.id ? progress : 0}
                  thickness="2.5px"
                  variant="determinate"
                  linearbackground="shadeOfGrey"
                />
              </CustomSection>
              <Spacer sx={{
                height: theme.spacing(3),
              }}
              />
            </>
          ))}
        </Box>
      </div>
      {/* Timer component in desktop starts */}

    </Box>
  );
}

export default TopDetailSection;
