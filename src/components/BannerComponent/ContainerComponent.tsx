import React from "react";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaChartLine,
  FaUserFriends,
  FaLightbulb,
  FaClipboardList,
  FaMoneyBillAlt,
  FaShareAlt,
} from "react-icons/fa";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Tiếp cận hơn 70 triệu khách hàng",
    description: "Dễ dàng chuyển đổi, không cần tải app",
    icon: <FaHandshake className="text-blue-500 text-4xl" />,
  },
  {
    title: "Tiết kiệm chi phí",
    description: "Tiết kiệm chi phí, thời gian và nhân lực vận hành ứng dụng",
    icon: <FaMoneyBillWave className="text-green-500 text-4xl" />,
  },
  {
    title: "Nâng cao trải nghiệm khách hàng",
    description:
      "Khách hàng dễ dàng trải nghiệm dịch vụ chỉ trên 1 ứng dụng duy nhất",
    icon: <FaChartLine className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Marketing hiệu quả",
    description: "Tận dụng lựa chọn và khởi tạo social trên Zalo",
    icon: <FaUserFriends className="text-purple-500 text-4xl" />,
  },
];

const services: FeatureItem[] = [
  {
    title: "Trải nghiệm nhanh chóng",
    description: "User dễ dàng truy cập Mini App ngay trên Zalo",
    icon: <FaLightbulb className="text-blue-500 text-4xl" />,
  },
  {
    title: "Giao diện đơn giản",
    description: "Tinh gọn thiết kế phù hợp với nhu cầu sử dụng",
    icon: <FaClipboardList className="text-green-500 text-4xl" />,
  },
  {
    title: "Tính tiện dụng cao",
    description: "Liên kết số tài khoản, số điện thoại, ... thuận tiện",
    icon: <FaMoneyBillAlt className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Dễ dàng chia sẻ",
    description: "Trực tiếp cho bạn bè, nhóm chat trên Zalo",
    icon: <FaShareAlt className="text-purple-500 text-4xl" />,
  },
];

const ContainerHome = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center mb-6">
      <div className="mt-6 flex flex-col items-center justify-center mb-6">
        <div className="flex flex-wrap justify-center -mx-3">
          <div className="max-w-lg w-[90%] md:w-auto p-6 bg-white h-48 rounded-lg shadow-lg mx-3 my-3">
            <h2 className="font-bold mt-6 text-center">Zalo Mini App là gì?</h2>
            <p className="text-center">
              Zalo Mini App là những "chương trình nhỏ" chạy trực tiếp trên nền
              tảng Zalo, <br />
              một giải pháp hiệu quả dành cho doanh nghiệp
            </p>
          </div>
          <div className="max-w-lg w-[90%] md:w-auto p-6 bg-white h-48 rounded-lg shadow-lg mx-3 my-3">
            <h2 className="font-bold mt-6 text-center">
              Lợi ích cho doanh nghiệp?
            </h2>
            <p className="text-center">
              Zalo Mini App giúp doanh nghiệp xây dựng và tích hợp ứng dụng trên
              Zalo một cách đơn giản, dễ dàng, <br /> tiện lợi và hiệu quả
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-[90%]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Ưu thế vượt trội khi sử dụng Zalo Mini App
        </h2>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg shadow-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-6"
            >
              {feature.icon}
              <h3 className="text-lg font-bold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 w-[90%]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Lợi ích cho người dùng
        </h2>
        <p className="text-center mb-6">
          Zalo Mini App giúp người dùng dễ dàng truy cập, trải nghiệm nhanh
          chóng đa dạng các dịch vụ
        </p>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg shadow-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-6"
            >
              {service.icon}
              <h3 className="text-lg font-bold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerHome;
