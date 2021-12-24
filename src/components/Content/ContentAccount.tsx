import React from "react";
import "./ContentAccount.css";
import imgAcc1 from "../../image/img_acc1.svg";
import imgAcc2 from "../../image/img_acc2.svg";
import imgAcc3 from "../../image/img_acc3.svg";
import imgAcc4 from "../../image/img_acc4.svg";


const ContentAccount = () => {
  return (
    <div className="Form">
      <div className="word4">
        <h1>Пакеты услуг для открытия счёта</h1>
        <p>Плата за обслуживание не взимается, если нет активности по счёту</p>
      </div>
      <div className="Tabs">
        <div className="TabsApp">
          <img src={imgAcc1} alt=" " id="addImg" />
          <h3 id="One">Для старта</h3>
          <p id="Two">Для кого?</p>
          <h4 id="Three">Для бизнеса любого масштаба</h4>
          <p id="Two">Обслуживание в месяц</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП внутри Банка</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП в другие банки</p>
          <h4 id="Three">30 ₽</h4>
          <p id="Two">Лимит на переводы физлицу без комиссии</p>
          <h4 id="Three">150 000 ₽</h4>
          <div className="buttonAcc">Открыть счёт</div>
        </div>
        <div className="TabsApp">
          <img src={imgAcc2} alt=" " id="addImg" />
          <h3 id="One">Для развития</h3>
          <p id="Two">Для кого?</p>
          <h4 id="Three">Для микробизнеса</h4>
          <p id="Two">Обслуживание в месяц</p>
          <h4 id="Three">6 месяцев - 0 ₽, затем - 990 ₽ </h4>
          <p id="Two">Платежи юрлицам и ИП внутри Банка</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП в другие банки</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Лимит на переводы физлицу без комиссии</p>
          <h4 id="Three">300 000 ₽</h4>
          <div className="buttonAcc">Открыть счёт</div>
        </div>
        <div className="TabsApp">
          <img src={imgAcc3} alt=" " id="addImg" />
          <h3 id="One">Для бизнеса</h3>
          <p id="Two">Для кого?</p>
          <h4 id="Three">Для бизнеса любого масштаба </h4>
          <p id="Two">Обслуживание в месяц</p>
          <h4 id="Three">1-ый месяц - 0 ₽, затем - 1200 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП внутри Банка</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП в другие банки</p>
          <h4 id="Three">30 платежей - 0 ₽, далее 30 ₽</h4>
          <p id="Two">Лимит на переводы физлицу без комиссии</p>
          <h4 id="Three">300 000 ₽</h4>
          <div className="buttonAcc">Открыть счёт</div>
        </div>
        <div className="TabsApp">
          <img src={imgAcc4} alt=" " id="addImg" />
          <h3 id="One">Для больших планов</h3>
          <p id="Two">Для кого?</p>
          <h4 id="Three">Для бизнеса любого масштаба</h4>
          <p id="Two">Обслуживание в месяц</p>
          <h4 id="Three">3990 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП внутри Банка</p>
          <h4 id="Three">0 ₽</h4>
          <p id="Two">Платежи юрлицам и ИП в другие банки</p>
          <h4 id="Three">100 платежей - 0 ₽, далее 30 ₽</h4>
          <p id="Two">Лимит на переводы физлицу без комиссии</p>
          <h4 id="Three">500 000 ₽</h4>
          <div className="buttonAcc">Открыть счёт</div>
        </div>
      </div>
    </div>
  );
};

export default ContentAccount;
