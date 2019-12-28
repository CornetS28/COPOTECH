import React from "react";
import classes from './SubToolbar.css'


const subToolbar = props => (
  <header className={classes.SubToolbar}>
    <div>Apply Now</div>
    <div>Request Info</div>
    <div>Login</div>
    <div>Teach With Us</div>
    <div>Volunteer</div>
    <div>Give</div>
  </header>
);

export default subToolbar;