import React from "react";
import "./footer.scss";
import vertor from "../../assets/svg/Vector.svg";
import digital from "../../assets/svg/Digital Store.svg";
import path from "../../assets/svg/Path 22671.svg";
import path1 from "../../assets/svg/Group 2555.svg";
import path2 from "../../assets/svg/Path 22667.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_title">
          <div className="title">
            <div className="footer_logo">
              <img src={vertor} alt="" />
              <img className="digital" src={digital} alt="" />
            </div>

            <div className="lorem_text">
              <p>{t("Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore")}
              </p>
            </div>

            <div className="footer_images">
              <img src={path} alt="" />
              <img src={path1} alt="" />
              <img src={path2} alt="" />
            </div>
          </div>

          <div className="contact">
            <div className="infor">
              <span>{t("Informação")}</span>
              <p>
                <br />
                {t("Sobre Drip Store")}
                <br />
                {t("Segurança")}
                <br />
                {t("Wishlist")}
                <br />
                {t("Blog")}
                <br />
                {t("Trabalhe conosco")}
                <br />
                {t("Meus Pedidos")}
              </p>
            </div>

            <div className="catego">
              <span>{t("Categorias")}</span>
              <p>
                <br />
                {t("Camisetas")}
                <br />
                {t("Calças")}
                <br />
                {t("Bonés")}
                <br />
                {t("Headphones")}
                <br />
                {t("Tênis")}
              </p>
            </div>

            <div className="conta">
              <span>{t("Contato")}</span>
              <p>
                <br />
                {t(" Av. Santos Dumont, 1510 - 1")}
                <br />
                {t(" andar - Aldeota, Fortaleza - ")}
                <br />
                {t("CE, 60150-161")}
              </p>
              <p>{t("(85) 3051-3411")}</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="digi">
        <hr />
      @ 2022 Digital College 
      </div>
     
    </div>
  );
};

export default Footer;
