import React from 'react';

import { styled, Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';

export function SpecialTooltipTitle({ imageUrl, titleText }) {
  return (
    <div>
      <div>
        {imageUrl && <img src={imageUrl} alt={titleText} />}
      </div>
      <p>{titleText}</p>
    </div>
  );
}

function MuiSpecialTooltip({ title, children }) {
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.white,
      width: '100%',
      maxWidth: 'none',
      padding: theme.spacing(2),
      margin: 0,
      '& img': {
        width: '100%',
        height: '100%',
      },
      '& p': {
        margin: 0,
      },
    },
  }));

  return (
    <CustomTooltip title={title}>
      {children}
    </CustomTooltip>
  );
}

export default MuiSpecialTooltip;
