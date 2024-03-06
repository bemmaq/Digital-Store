import React, { useEffect, useState } from "react";
import "./home.scss";
import white from "../../assets/img/White-Sneakers-PNG-Clipart 1.png";
import ornament from "../../assets/img/Ornament 11 (1).png";
import star from "../../assets/img/star.svg";
import ddd from "../../assets/img/ddd 1.svg";
import ffff from "../../assets/img/ffff.svg";
import frame10 from "../../assets/svg/Frame 10.svg";
import frame11 from "../../assets/svg/Frame 11.svg";
import frame13 from "../../assets/svg/Frame 13.svg";
import frame14 from "../../assets/svg/Frame 14.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSport } from "../../store/shopSlice";
import elipse from "../../assets/svg/Ellipse 11.svg";
import laye from "../../assets/svg/Laye 1.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  const { sportData, isLoading, error } = useSelector((state) => state.sport);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSport());
  }, []);

  return (
    <div>
      <div className="home_content">
        <div className="container">
          <div className="content_home">
            <div className="home_text">
              <h5>{t("Melhores ofertas personalizadas")}</h5>
              <h1>{t("Queima de stoque Nike ")}🔥</h1>
              <p>
                {t(
                  "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
                )}
              </p>
              <button>{t("Ver Ofertas")}</button>
            </div>
            <div className="home_img">
              <img width={650} src={white} alt="" />
              <div>
                <img className="ornament" src={ornament} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h5 className="text_1">{t("Coleções em destaque")}</h5>
          <div className="boxes">
            <div className="block">
              <div className="box">
                <span>30% OFF</span>
                <h2>{t("Novo drop Supreme")}</h2>
                <button>{t("Comprar")}</button>
              </div>
              <div className="images">
                <img src={star} alt="" />
              </div>
            </div>
            <div className="block">
              <div className="box">
                <span>30% OFF</span>
                <h2>{t("Coleção Adidas")}</h2>
                <button>{t("Comprar")}</button>
              </div>
              <div className="images">
                <img src={ddd} alt="" />
              </div>
            </div>

            <div className="block">
              <div className="box">
                <span>30% OFF</span>
                <h2>{t("Novo Beats Bass")}</h2>
                <button>{t("Comprar")}</button>
              </div>
              <div className="images">
                <img src={ffff} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>{t("Coleções em destaque")}</h2>
          <div className="image_card">
            <div>
              <img src={frame10} alt="" />
            </div>
            <div>
              <img src={frame11} alt="" />
            </div>
            <div>
              <img src={frame11} alt="" />
            </div>
            <div>
              <img src={frame13} alt="" />
            </div>
            <div>
              <img src={frame14} alt="" />
            </div>
          </div>
        </div>

        <div className="main">
          <h2>{t("Produtos em alta")}</h2>
          <div className="main_data">
            {sportData.slice(88, 96).map((el) => (
              <h2 key={el.id}>
                <Link to={`/productLogo/${el.id}`}>
                <img className="img_main" width={250} src={el.images} alt="" />
                </Link>
                <div className="price">
                  <p>{el.name}</p>
                  <span>{el.price}</span>
                  <s>200$</s>
                </div>
              </h2>
            ))}
          </div>
        </div>
      </div>

      <div className="jordan">
        <div className="container">
          <div className="jordan_text">
            <div>
              <img className="elipse" src={elipse} alt="" />
              <img className="laye" src={laye} alt="" />
            </div>
            <div>
              <p>{t("Oferta especial")}</p>
              <h5>{t("Air Jordan edição de colecionador")}</h5>
              <span>
                {t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip"
                )}
              </span>
              <br />
              <button>{t("Ver Oferta")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
