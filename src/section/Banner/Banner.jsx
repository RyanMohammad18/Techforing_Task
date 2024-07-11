import React from "react";
import { Grid } from "@mui/material";
import LeftBannerContent from "./LeftBanner/LeftBannerContent";
import RightBannerContent from "./RightBanner/RightBannerContent";
import style from './bannerstyle.module.css';

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={style.leftBannerContent}>
            <LeftBannerContent />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={style.rightBannerContent}>
            <RightBannerContent />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
