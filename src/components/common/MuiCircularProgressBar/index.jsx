import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export function LabelComponent({ progress }) {
  return (
    <>
      <Typography variant="h3" fontWeight={600}>
        {`${Math.round(progress)}`}
      </Typography>
      <Typography variant="h4">
        %
      </Typography>
    </>
  );
}

function MuiProgressBar({ isLabel, maxPercentageValue, ...props }) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (
        prevProgress >= maxPercentageValue ? maxPercentageValue : prevProgress + 1
      ));
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        {...props}
        value={progress}
      />

      {isLabel && (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LabelComponent progress={progress} />

      </Box>
      )}

    </Box>
  );
}

export default MuiProgressBar;
