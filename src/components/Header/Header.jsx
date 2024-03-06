import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";
import group from "../../assets/img/Group 53571.svg";
import search from "../../assets/img/Search_4.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./singUp/SingUp";
import SignIn from "./singIn/SingIn";
import { Input } from "antd";


const Header = ({changeVisible}) => {
  const { itemCard } = useSelector((state) => state.card);
  const [content, setContent] = useState('')
  const { t, i18n } = useTranslation();
 
  const changeSignUp = () => {
    setContent('SignUp'); 
  }
  const changeSignIn = () => {
    setContent('SignIn'); 
  }

  function changeLang(language) {
    let lang = language.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
        <Input type="text" placeholder={t("Pesquisar produto")} />
        {/* <img className="search" src={search} alt="" />  */}
        <p onClick={changeSignUp}>{t("Cadastre-se")}</p>
        <button onClick={changeSignIn}>{t("Entrar")}</button>
        {content === 'SignUp' && <SignUp/>} 
        {content === 'SignIn' && <SignIn/>} 
       <Link to={'/Card'}>
       <div className="korzina">
          <img src={group} alt="" />
          <span>{itemCard.length}</span>
        </div>
       </Link>
        <div>
          <select onChange={changeLang}>
            <option value={"pt"}> PT</option>
            <option value={"ru"}> RU</option>
            <option value={"en"}> EN </option>
          </select>
        </div>
      </div>
      <div className="title">
        <ul>
          <li>
            <Link to="/">{t("Casa")}</Link>
          </li>
          <li>
            <Link to="/product">{t("Produtos")}</Link>
          </li>
          <li>
            <Link to="/category">{t("Categorias")}</Link>
          </li>
          <li>
            <Link to="/menu">{t("Meus Pedidos")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
