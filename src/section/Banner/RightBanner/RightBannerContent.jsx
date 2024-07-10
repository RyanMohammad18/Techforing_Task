import React from 'react';
import image1 from '../../../images/manimage.png';
import style from '../../Banner/RightBanner/rightbannerstyle.module.css';
import OverlayContent from './common/OverlayContent';


const RightBannerContent = () => {
  return (
    <div className={style.maincontainer}>
      <OverlayContent />
      <div className={style.imagecontainer}>
        <img src={image1} alt="manimage" />
      </div>
    </div>
  );
};

export default RightBannerContent;
