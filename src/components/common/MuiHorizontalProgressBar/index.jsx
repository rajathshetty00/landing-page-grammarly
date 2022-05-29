import { Box, LinearProgress, styled } from '@mui/material';
import React from 'react';

function MuiHorizontalProgressBar({ ...props }) {
  const [progress, setProgress] = React.useState(0);

  const CustomLinearProgress = styled(LinearProgress)(({
    theme, thickness, linearbackground,
  }) => ({
    height: thickness,
    background: theme.palette.text[linearbackground],
    '& .MuiLinearProgress-bar': {
      background: '#000000',
    },
  }));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = oldProgress + 1;
        return diff;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <CustomLinearProgress
        {...props}
        value={progress}
      />
    </Box>
  );
}

export default MuiHorizontalProgressBar;
