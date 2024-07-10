import React from 'react';
import { Box, Typography } from '@mui/material';
import style from './overlaycontentstyle.module.css';

const OverlayContent = () => {
  return (
    <Box className={style.overlayContainer}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <Box className={style.textBox}>
          <Typography>SMB Solution</Typography>
        </Box>
        <Box className={style.line} />
        <Box className={style.circle} />
      </Box>
    </Box>
  );
};

export default OverlayContent;
