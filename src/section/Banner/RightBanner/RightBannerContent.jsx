import React, { useState } from "react";
import image1 from "../../../images/manimage.png";
import style from "../../Banner/RightBanner/rightbannerstyle.module.css";
import OverlayContent from "./common/OverlayContent";
import OverlayContentright from "./common/OverlayContentRight";

const RightBannerContent = () => {
  return (
    <div className={style.maincontainer}>
      <div className={style.leftoverlay}>
        <div>
          <OverlayContent delay={1500} />
        </div>

        <div>
          <OverlayContent delay={2500} />
        </div>
        <div>
          <OverlayContent delay={3500} />
        </div>
      </div>
      <div className={style.rightoverlay}>
        <div>
          <OverlayContentright delay={2000} />
        </div>

        <div>
          <OverlayContentright delay={3000} />
        </div>
        <div>
          <OverlayContentright delay={4000}  />
        </div>
      </div>

      <div className={style.imagecontainer}>
        <img src={image1} alt="manimage" />
      </div>
    </div>
  );
};

export default RightBannerContent;
