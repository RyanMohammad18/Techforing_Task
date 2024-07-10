import React from "react";
import style from "./homestyle.module.css";
import CommonButtons from "../components/CommonButtons";
import Banner from "../section/Banner/Banner";

const HomePage = () => {
  return (
    <div className={style.maincontainer}>
      <div className={style.hometitle}>
        <p>SAFEGUARD YOUR BUSINESS WITH ALL-IN-ONE CYBERSECURITY</p>
      </div>
      <div className={style.buttoncontainer}>
        <div className={style.buttons}>
          <CommonButtons />
          <CommonButtons />
          <CommonButtons />
          <CommonButtons />
        </div>
   
      </div>
      <div>
      <Banner/>
      </div>
    </div>
  );
};

export default HomePage;
