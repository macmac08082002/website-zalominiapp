import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BannerComponent from "../../components/BannerComponent/BanmerComponent";
import ContainerHome from "../../components/BannerComponent/ContainerComponent";

const HomePages = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <ContainerHome />
    </div>
  );
};

export default HomePages;
