import React from "react";
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
// import SubToolbar from '../../components/Navigation/Toolbar/SubToolbar/SubToolbar';


const layout = props => (
  <Aux>
    <Toolbar />     
    <main className={classes.Contant}>{props.children}</main>
  </Aux>
);

export default layout;