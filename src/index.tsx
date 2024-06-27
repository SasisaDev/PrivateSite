import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

import "./index.scss"
import "./footer.scss"
import { IsEmail, IsNameGood, IsPasswordSecure } from "./Utility";

function RegistrationSection() {
    const [submited, setSubmited] = useState(false);
    const [correct, setCorrect] = useState(true);

    const [name, setName] = useState('');
    const [correctName, setCorrectName] = useState(true);

    const [email, setEmail] = useState('');
    const [correctEmail, setCorrectEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [correctPassword, setCorrectPassword] = useState(true);

    const [agreement, setAgreement] = useState(false);

    useEffect(()=>{
        setCorrectEmail(email == '' || IsEmail(email));
    }, [email]);

    useEffect(()=>{
        setCorrectName(IsNameGood(name));
    }, [name]);

    useEffect(()=>{
        setCorrectPassword((password == '' && password2 == '') || (IsPasswordSecure(password) && password2 == password));
    }, [password, password2])

    useEffect(()=>{
        setCorrect(email != '' && password != '' && correctEmail && correctPassword && correctName && agreement);
    }, [correctEmail, correctPassword, agreement, correctName])

    return <div className="section-base registration">
        <div className="registration-container">
            <div className="registration-title">Регистрация</div>
            <input className="registration-input-single" onChange={e => setName(e.target.value)} placeholder="Имя"/>
            <input className="registration-input-single" onChange={e => setEmail(e.target.value)} placeholder="Ваш EMail"/>
            <div className={"registration-wrong " + (correctEmail ? "hide" : "")}>Неправильный адресс EMail</div>
            <input className="registration-input-single" onChange={e => setPassword(e.target.value)} placeholder="Пароль"/>
            <input className="registration-input-single" onChange={e => setPassword2(e.target.value)} placeholder="Повторите пароль"/>
            <div className={"registration-wrong " + (correctPassword ? "hide" : "")}>Неправильный пароль. Минимум 8 символов, 1 заглавная буква и 1 цифра.</div>
            <div className="first-section-button-container">
                <input type="checkbox" className="registration-input-checkbox" onChange={e => setAgreement(e.target.checked)}/>
                <label>Я согласен с условиями Лицензионного Соглшашения</label>
            </div>
            <div className="first-section-button-container">
                <div className={"first-section-button-body send " + (!correct ? "unavailable" : "")} onClick={()=> {if(correct)setSubmited(true);}}>Зарегистрироваться</div>
            </div>
            {submited && <div className="registration-submited">Аккаунт зарегистрирован</div>}
        </div>
    </div>
}

export function Footer(Page: any)
{
    return <div className="footer">
        <div className="footer-flexseg footer-data">
            <div className="footer-data-text">Подвал</div>
            <div className="footer-data-text">Главная</div>
            <div className="footer-data-text">Адрес: </div>
        </div>
    </div>
}

export function FrontPage()
{
    return <div className="page-body-container">
        <RegistrationSection />
        <Footer />
    </div>
}

const container = document.getElementById("react-app");
if(container != null)
{
    const root = ReactDOM.createRoot(container);

    root.render(<FrontPage />);
}