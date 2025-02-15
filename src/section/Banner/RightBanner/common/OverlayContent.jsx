import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import style from "./overlaycontentstyle.module.css";

const OverlayContent = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <Box className={`${style.overlayContainer} ${isVisible ? style.popIn : ''}`}>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1rem" }}>
        <Box className={style.textBox}>
          <Typography>SMB Solution</Typography>
        </Box>
        <Box className={style.line} />
        <Box className={style.circle}>
          <Box className={style.innerCircle} />
        </Box>
      </Box>
    </Box>
  );
};

export default OverlayContent;
