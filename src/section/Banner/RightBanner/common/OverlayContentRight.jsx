import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import style from "../common/rightoverlaycontent.module.css";

const OverlayContentRight = ({ delay }) => {
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
        <Box className={style.circle}>
          <Box className={style.innerCircle} />
        </Box>
        <Box className={style.line} />

        <Box className={style.textBox}>
          <p>Enterprise Security</p>
        </Box>
      </Box>
    </Box>
  );
};

export default OverlayContentRight;
