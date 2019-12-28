import React from "react";
import classes from './Toolbar.css'
import SubToolbar from './SubToolbar/SubToolbar';
import Logo from '../../Logo/Logo';


const toolbar = props => (
  <header className={classes.Toolbar}>
    <SubToolbar />
    <Logo />
    <div>DEGREE PROGRAM</div>
    <div>STUDENT EXPERIENCE</div>
    <div>BECOME A STUDENT</div>
    <div>ABOUT US</div>
  </header>
);

export default toolbar