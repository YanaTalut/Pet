import React from 'react';
import classes from './MainFooter.module.css'


function MainFooter() {
    return (
        <div className={classes.footer}>
            <div >
                <div class="container-sm">
                    <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col">
                                <p className={classes.p}>© Все права защищены</p>
                            </div>
                            <div class="col">
                                <div class="container text-center">
                                    <div class="row align-items-start">
                                        <div className={classes.contact}>
                                            <div class="col">
                                                <div className={classes.author}>
                                                    <p >Авторы:</p>
                                                    <p>Талуть Яна Андреевна</p>
                                                    <p>Шибакова Софья Алекcеевна</p>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div className={classes.author}>
                                                    <p className={classes.wite}>ляляля</p>
                                                    <p>talut2004@mail.ru</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;