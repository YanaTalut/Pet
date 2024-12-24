import React from 'react';
import classes from "./Home.module.css";
import Possibilities from '../components/Possibilities.jsx';
import img1 from "C:/Users/Home/upcoming-events1/src/images/img1.png";
import img2 from "C:/Users/Home/upcoming-events1/src/images/img2.jpg";
import img3 from "C:/Users/Home/upcoming-events1/src/images/img3.png";


function Home() {
    return (
        <div>
            <h1 className={classes.header}>САЙТ С НАШИМИ ЛЮБИМЦАМИ </h1>
            <p className={classes.hello}>Добро пожаловать в наш уютный уголок, посвященный всем любителям домашних животных! Мы понимаем, как важны наши питомцы в жизни, и готовы помочь вам сделать так, чтобы их жизнь была счастливой и полной приключений. Присоединяйтесь к нашему сообществу, делитесь опытом и любовью к животным!</p>
            <div>
                <h3 className={classes.h3} >Какие у вас возможности?</h3>
                <div className={classes.possibilities}>               
                <Possibilities img={img1} title='Выкладывай!' text='Поделись своим питомцем со всеми! Расскажи о нем: его историю и привычки, характер и особенности'/>
                <Possibilities img={img2} title='Восхищайся!' text='Читай истории питомцев нашего сайта, заводи знакомства и поднимай себе настроение'/>
                <Possibilities img={img3} title='Предлагай!' text='Расскажи нам о своих идея по улучшению сайта. Стань нашим партером и другом'/>
                </div>
            </div>
        </div>
    );
}

export default Home;