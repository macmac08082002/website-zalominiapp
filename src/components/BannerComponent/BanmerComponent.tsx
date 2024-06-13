import React from "react";
import bannerImage from "../../assets/banner.png";

const BannerComponent = () => {
  return (
    <div className="relative">
      <img src={bannerImage} alt="Banner" className="w-full h-auto" />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-2xl font-bold mb-4">
          Tạo Mini App ngay, triệu khách hàng tầm tay
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded">
          Khám Phá
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
