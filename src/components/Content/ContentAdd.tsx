import React, { useState } from "react";
import { API } from "../../api/api";
import "./ContentAdd.css";
const ContentAdd = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] =  useState('')
  const [isChecked, setIsChecked] = useState(false)

  const onCheck = () => {
    setIsChecked(prevState => !prevState)
  }

  const onSubmit = () => {
    API.post({name, phone})
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
    setName('')
    setPhone('')
  }

  return (
    <div className="Form">
      <div className="TabAdd">
        <h1 id="text1">Стать клиентом</h1>
        <input type="text" value={name} onChange={(e : any) => setName(e.target.value)} name="name" className="buttonName" placeholder="Контактное лицо"/>
        <input type="text" value={phone} onChange={(e : any) => setPhone(e.target.value)} className="buttonName" placeholder="Моб.тел организации"/>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%'}}>
          <input type={'checkbox'} checked={isChecked} onChange={onCheck} style={{marginBottom: 12}}/>
          <h2 id="text2">
            Даю согласаие АКБ "Алмазэргиэнбанк" АО на обработку персональных данных
          </h2> 
        </div>
        <button className="buttonAcc" onClick={onSubmit} disabled={!isChecked}>Отправить</button>
      </div>
      <div className="buttonWhatsApp">Консультация в Whatsapp</div>
    </div>
  );
};

export default ContentAdd;
