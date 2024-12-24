import React from 'react';
import classes_pos from "./Possibilities.module.css";


function Possibilities(props) {
    return (
        <div>
            <div className={classes_pos.cont}>
                <img className={classes_pos.img} src={props.img} alt="Possibilities" />
                <h3 className={classes_pos.h3}>{props.title}</h3>
                <p className={classes_pos.p}>{props.text}</p>
            </div>
        </div>
    );
}

export default Possibilities;