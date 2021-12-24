import React from "react";
import "./ContentAdd.css";
const ContentAdd = () => {
  return (
    <div className="Form">
      <div className="TabAdd">
        <h1 id="text1">Стать клиентом</h1>
        <input type="text" name="name" className="buttonName" placeholder="Имя"/>
        <input type="text" name="name" className="buttonName" placeholder="Телефон"/>
        <h2 id="text2">
          Нажимая на кнопку «Отправить», я соглашаюсь с условиями на передачу
          персональных данных
        </h2>
        <div className="buttonAcc">Отправить</div>
      </div>
      <div className="buttonWhatsApp">Консультация в Whatsapp</div>
    </div>
  );
};

export default ContentAdd;
