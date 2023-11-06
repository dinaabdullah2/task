import React from "react";
import footerLogo from "./../../assets/image/hola.png";
const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col  items-center justify-between">
      <p>جميع الحقوق محفوظة © تكنكة 2023</p>
      <p className=" flex flex-row  md:gap-2 items-center md:mt-0 mt-[5px]">
        <span className="pt-2">تطوير و تشغيل</span>
        <img className="" src={footerLogo} alt="footerLogo" />
        <span className="pt-2">لتقنية المعلومات</span>
      </p>
    </footer>
  );
};

export default Footer;
