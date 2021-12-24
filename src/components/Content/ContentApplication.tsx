import React from "react";
import "./ContentApplication.css";
import imgApp from "../../image/imgApp.svg";

const ContentApp = () => {
  return (
    <div className="Form">
      <div className="word4">
        <h1>Кредитования на особых условиях</h1>
        <p>На развите предпринимательской деятельности </p>
      </div>
      <div className="TabApp">
        <div>
          <h1 className="Color">Программа 9,95%</h1>
          <p className="textTwo">
            Льготное кредитование клиентов категории «Микропредприятия» по
            кредитному продукту «Кредит по Программе 9,95»
          </p>
          <div className="buttonApp">
            <div className="buttonAppOne">Подать заявку онлайн</div>
            <div className="buttonAppTwo">Все программы кредитования</div>
          </div>
        </div>
        <img src={imgApp} alt=" " className="addImg" />
      </div>
    </div>
  );
};

export default ContentApp;
