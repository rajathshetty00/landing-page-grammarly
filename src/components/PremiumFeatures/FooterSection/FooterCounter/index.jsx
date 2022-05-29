import { Box } from '@mui/material';
import MuiTypography from 'components/common/MuiTypography';
import MuiCircularProgressBar from 'components/common/MuiCircularProgressBar';
import Spacer from 'components/common/Spacer';
import React, { useRef, useState, useEffect } from 'react';
import mytheme from 'theme';
import useVisible from 'hooks/useIsVisible';
import footerDetails from '../utils/dummy';

function FooterCounter() {
  const { counterHeader, counterSubHeader, counterList } = footerDetails;

  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (isVisible) {
      setList(counterList);
    }
  }, [isVisible]);

  return (
    <Box sx={{
      padding: mytheme.spacing(8, 0),
      background: mytheme.palette.common.white100,
      textAlign: 'left',
    }}
    >
      <Box sx={{
        width: '70%', margin: '0 auto',
      }}
      >
        <MuiTypography variant="h3">
          {counterHeader}
        </MuiTypography>
        <Spacer size={16} />
        <MuiTypography variant="body2" fontWeight={mytheme.typography.fontWeightRegular}>
          {counterSubHeader}
        </MuiTypography>
        <Spacer size={64} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: mytheme.spacing(6),
          }}
          ref={elemRef}
        >
          {list.map(({ id, percentageValue, bottomText }) => (
            <div key={id}>
              <MuiCircularProgressBar maxPercentageValue={percentageValue} size={144} thickness={1.25} variant="determinate" isLabel />
              <Spacer size={20} />
              <MuiTypography variant="p" component="p" fontWeight={mytheme.typography.fontWeightRegular}>
                {bottomText}
              </MuiTypography>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default FooterCounter;
