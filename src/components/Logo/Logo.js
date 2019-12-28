import React from "react";
import cepotechLogo from '../../assets/images/Logo.jpeg';
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={cepotechLogo} alt="cepotech logo" />
    <h3 className={classes.Para}>Metye m <br />se <br />avni m</h3>
  </div>
);

export default logo;
