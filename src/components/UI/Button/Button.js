import React from 'react';

import classes from "./Button.module.css";

const button = (props) => (
    <button 
        className={[classes.Button, classes[props.buttonType]].join(' ')} //Convert the array to a string coz className expect a string.
        onClick={props.clicked}>{props.children}</button>
);

export default button;