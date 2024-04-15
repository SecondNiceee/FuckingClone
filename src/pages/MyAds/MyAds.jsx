import React, { useEffect, useState } from 'react';
import Burger from '../../components/UI/Burger/Burger';
import FirstBlock from '../../components/First/FirstMain/FirstBlock';
import FullPicker from '../../components/UI/FullPicker/FullPicker';
import upDown from '../../images/icons/UpDown.svg'
import plus from '../../images/icons/plus-circle.svg'
import myImage from '../../images/desccription.png'
import { Await } from 'react-router-dom';
import AdCreatingOne from '../AdCreatingOne/AdCreatingOne/AdCreatingOne';
const MyAds =  () => {




    const values = ['Я испольнитель' , 'Я заказчик']
    const keys = ['freelancer' ,  'customer']
    const [nowValue , setNowKey] = useState('freelancer')
    const [isDetailsActive , setDetailsActive] = useState(false)
    
    const [myAdsArray, setMyAdsArray] = useState([
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          executionPlace: "Можно выполнить удаленно",
          startTime: "Начать 28 февраля, 00:00",
          tonPrice: "261 TON",
          rublesPrice: "52 200 RUB",
          fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
          dedline : "Воскресенье, 10 марта 2024 23:59",
          rate : '5',
          customerName : 'YourName',
          isActive : true,
          creationTime : 'Создано когда-то , ..timing',
          viewsNumber : '51',

        },
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          executionPlace: "Можно выполнить удаленно",
          startTime: "Начать 28 февраля, 00:00",
          tonPrice: "261 TON",
          rublesPrice: "52 200 RUB",
          fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
          dedline : "Воскресенье, 10 марта 2024 23:59",
          rate : '5',
          customerName : 'YourName',
          isActive : true,
          creationTime : 'Создано когда-то , ..timing',
          viewsNumber : '51'
        },
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          executionPlace: "Можно выполнить удаленно",
          startTime: "Начать 28 февраля, 00:00",
          tonPrice: "261 TON",
          rublesPrice: "52 200 RUB",
          fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
          dedline : "Воскресенье, 10 марта 2024 23:59",
          rate : '5',
          customerName : 'YourName',
          isActive : true,
          creationTime : 'Создано когда-то , ..timing',
          viewsNumber : '51'
        },
      ]);

    return (
        <div className='MyAdsContainer'>
                <Burger />
                <p className='MyAds'>
                    Мои задания
                </p>
                <div className="counter__block">
                    <div className="number-of-transactions">
                        <p>1</p>
                        <p>Количество сделок</p>
                    </div>
                    <div className="number-of-transactions">
                        <p>0%</p>
                        <p>Завершенные сделки</p>
                    </div>
                </div>
                <div className="YourAds">
                    <p>Ваши объявления</p>
                    <div className="sortBy">
                        <p className='sortByPar'>Активный</p>
                        <img className='upDown' src={upDown} alt="" />
                    </div>
                </div>
                <FullPicker className={'MyAds__FullPicker'} values = {values} nowKey = {nowValue} setNowKey = {setNowKey} keys = {keys}/>
                <div className="PickerContent">
                    <div className="picler__block">
                        
                        <div className="AdCreactingFunction">
                            <img src={plus} alt="" />
                            <p>Создать объявление</p>
                        </div>
                        <div className="AdsContainer">
                            {myAdsArray.map( (e, i) => {
                                return <FirstBlock setDetailsActive = {setDetailsActive}  {...e} />
                            })}
                        </div>
                    </div>

                </div>
            <AdCreatingOne />      
        </div>
    );
};

export default MyAds;