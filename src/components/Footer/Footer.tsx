import React from "react";
import "./Footer.css";
import FooterApp from "../../image/FooterApp.svg";
import FooterLogo from "../../image/FooterLogo.svg";

const footer = () => {
  return (
    <div className="Footer">
      <div className="FooterOne">
        <div className="FooterInfo">
          <div className="FooterInfoComp">
            <p id="FooterTextOne">Бесплатная горячая линия</p>
            <h2 id="FooterTextTwo">8 800 100-34-22</h2>
          </div>
          <div className="FooterInfoComp">
            <p id="FooterTextOne">Телефон</p>
            <h2 id="FooterTextTwo">8 (4112) 34-22-22</h2>
          </div>
          <div className="FooterInfoComp">
            <p id="FooterTextOne">Электронная почта</p>
            <a id="FooterTextTwo" href="#">
              bank@albank.ru
            </a>
          </div>
          <div className="FooterInfoComp">
            <p id="FooterTextOne">Наш адрес</p>
            <h2 id="FooterTextTwo">г.Якутск, пр.Ленина,1</h2>
          </div>
          <div className="FooterInfoApp">
            <div className="FooterInfoImg">
              <img src={FooterApp} alt=" " id="FooterImg" />
            </div>
            <div className="FooterApp">
              <p id="FooterTextOne">Приложение для iOS и Android</p>
              <h2 id="FooterTextTwo">АЭБ Онлайн</h2>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="FooterOne">
        <div className="FooterInfo">
          <div className="FooterInfoCompTwo">
            <a id="FooterTextTwo" href="#">
              Офисы
            </a>
          </div>
          <div className="FooterInfoCompTwo2">
            <a id="FooterTextTwo" href="#">
              Курсы валют
            </a>
          </div>
          <div className="FooterInfoCompTwo2">
            <a id="FooterTextTwo" href="#">
              Новости
            </a>
          </div>
          <div className="FooterInfoCompTwo2">
            <a id="FooterTextTwo" href="#">
              Программа лояльности «Свои»
            </a>
          </div>
          <div className="FooterInfoCompTwo2">
            <a id="FooterTextTwo" href="#">
              Продажа имущества
            </a>
          </div>
          <div className="FooterInfoCompTwo3">
            <a id="FooterTextTwo" href="#">
              Связь с Банком
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div className="FooterTwo">
        <div className="FooterInfo">
          <div className="FooterInfoCompTwo">
            <a id="FooterTextLow">
              © 2021 АКБ «Алмазэргиэнбанк» АО. Генеральная лицензия ЦБ РФ №2602
              от 08.06.2015
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
