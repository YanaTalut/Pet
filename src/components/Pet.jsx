import React from 'react';
import classes from './Pet.module.css';


function Pet(props) {
    return (
        <div className={classes.cont}>
            <div className={classes.border}>
                <h1 className={classes.name}> {props.name} </h1>
            </div>
            <div>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <img className={classes.img_pet} src={props.img_pet1} alt="img1" />
                        </div>

                        <div class="col">
                            <img className={classes.img_pet} src={props.img_pet2} alt="img2" />
                        </div>

                        <div class="col">
                            <img className={classes.img_pet} src={props.img_pet3} alt="img3" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center">
                <div className={classes.flexContainer}>
                    <div className={classes.text}>
                        <h3 className={classes.h3}>Порода: <span className={classes.span}>{props.poroda}</span></h3>
                        <h3 className={classes.h3}>Возраст: <span className={classes.span}>{props.age}</span></h3>
                        <h3 className={classes.h3}>Имя хозяина: <span className={classes.span}> {props.perents}</span></h3>
                        <h3 className={classes.h3}>Инстаграм: <span className={classes.span}>{props.inst}</span></h3>
                        <h3 className={classes.h3}>Рассказ: <span className={classes.span}>{props.text}</span></h3>
                    </div>

                    <div class="col">
                        <img className={classes.img} src={props.img_pet4} alt="img4" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pet;