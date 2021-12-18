import React from "react";
import "./Content.css";
import blueLine from "../../image/blueLine.svg";
import mainPhoto from "../../image/mainPhoto.svg";

const content = () => {
  return (
    <div className="main">
      <div className="infoSlider">
        <div>
          <img src={blueLine} alt=" " className="imgLine" />
        </div>
        <div>
          <img src={mainPhoto} alt=" " className="imgMain" />
        </div>
        <div className="word1">
          АЭБ - большие возможностей для малого бизнеса
        </div>
        <div className="word2">
          Бесплатное обслуживание на пакете «Для развития» первые 6 месяцев.
          Предложение до 20.12.21
        </div>
        <div className="button">Стать клиентом</div>
      </div>
      <div className="infoStatic">
        <div className="word3">
          <h1>6000</h1>
          <p>предпринемателей доверяют нам</p>
        </div>
        <div className="word3">
          <h1>1,8 млн ₽</h1>
          <p>
            переводы себе на карту без комиссии за 6 месяцев на пакете «Для
            развития»
          </p>
        </div>
        <div className="word3">
          <h1>7 дней</h1>
          <p>займет регистрация ИП или ООО, нужен лишь паспорт</p>
        </div>
      </div>
      <div className="infoBusiness">
        <div className="word4">
          <h1>Всё для ведения бизнеса</h1>
          <p>Бесплатное открытие счёта без посещения офиса банка</p>
        </div>
        <div className="infoBusinessSup">
          <div className="Art1">
            <h1>Поддержка 24/7</h1>
            <p className="text">
              Поддержка вашего бизнеса 24 часа в сутки, наш call-центр всегда
              ответит на ваше вопросы
            </p>
          </div>
          <div className="Art2">
            <h1>Поддержка 24/7</h1>
            <p className="text">
              Поддержка вашего бизнеса 24 часа в сутки, наш call-центр всегда
              ответит на ваше вопросы
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
