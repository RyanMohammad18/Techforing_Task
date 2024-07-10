import React from "react";
import style from './leftbannerstyle.module.css'

const LeftBannerContent = () => {
  return (
    <div className={style.leftcontainer}>
      <div className={style.titlecontainer}>
        <p>Against Evolving Threats</p>
      </div>
      <div className={style.descriptioncontainer}>
        <p>
          Get a clear picture of your organizations security posture and how
          prepared you are against evolving cyber threats before malicious
          entities, and apply customized recommendations to improve your
          security program.
        </p>
      </div>
      <div className={style.buttoncontainer}>
        <button>Identify Cyber Risks Today</button>
      </div>
    </div>
  );
};

export default LeftBannerContent;
