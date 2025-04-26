import React from "react";

const Structure = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Menu bên trái */}
      <div className="w-[300px] bg-[#1c1c5a] text-white p-4 shadow-md">
        <h2 className="text-center text-lg font-bold bg-[#003366] py-2 mb-4">
          CƠ CẤU TỔ CHỨC
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>LÃNH ĐẠO</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>CÁC PHÒNG BAN</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>CÁC KHOA</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>CÁC VIỆN</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>CÁC TRUNG TÂM</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>CÁC PHẦN HIỆU</span>
            <span>➤</span>
          </li>
          <li className="flex justify-between items-center bg-[#2c2c6a] px-4 py-2 rounded hover:bg-[#003366] cursor-pointer">
            <span>ĐOÀN THỂ</span>
            <span>➤</span>
          </li>
        </ul>
      </div>

      {/* Nội dung bên phải */}
      <div className="w-3/4 p-6">
        {/* Phần Thông Báo */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            THÔNG BÁO
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-red-600 mr-2">🔥</span>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2024
              </a>
              <span className="ml-2 text-red-600 text-sm">[MỚI]</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">🔥</span>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Thông báo tuyển chọn nhóm sinh thực hiện đề tài cho học sinh,
                sinh viên đại học Cần Thơ năm 2024-2025
              </a>
              <span className="ml-2 text-red-600 text-sm">[MỚI]</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">🔥</span>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Đại học Công nghệ... 25-04-2025
              </a>
              <span className="ml-2 text-red-600 text-sm">[MỚI]</span>
            </li>
          </ul>
        </div>

        {/* Phần Tin Tức - Sự Kiện */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            TIN TỨC - SỰ KIỆN
          </h3>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Sự kiện"
                className="mb-2"
              />
              <a href="#" className="text-gray-800 hover:text-blue-600">
                AVETA tại triển giới phần mềm trí giá 180.000 ĐS Mỹ
              </a>
              <p className="text-gray-600 text-sm">
                Hội nghị Khoa học Quốc tế BẮC 2025 lần 2 tại TP.HCM - Sức mạnh
                AI trong... 22-04-2025
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Sự kiện"
                className="mb-2"
              />
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Đại học Công nghệ TP.HCM tham gia dự án Green Edu Seeds của quý
                Erasmus 19-03-2025
              </a>
              <p className="text-gray-600 text-sm">
                Học sinh viên năng... 24-03-2025
              </p>
            </div>
          </div>
        </div>

        {/* Phần Tuyển Sinh */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            TUYỂN SINH
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Thông báo tuyển sinh đại học liên thông từ trình độ cao đẳng lên
                trình độ đại học, Đợt 1 năm 2025 28-03-2025
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Thông báo v/v tuyển sinh đại học văn bằng hai, Đợt 1 năm 2025
                20-03-2025
              </a>
            </li>
          </ul>
        </div>

        {/* Phần Hợp Tác Quốc Tế */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            HỢP TÁC QUỐC TẾ
          </h3>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Hợp tác"
                className="mb-2"
              />
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Sôi nổi hoạt động Gương Thành phố lưu văn hóa, khoa học sinh
                viên nước...
              </a>
              <p className="text-gray-600 text-sm">24-03-2025</p>
            </div>
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Hợp tác"
                className="mb-2"
              />
              <a href="#" className="text-gray-800 hover:text-blue-600">
                Đại học Công nghệ TP.HCM tham gia dự án Green Edu Seeds của quý
                Erasmus 19-03-2025
              </a>
              <p className="text-gray-600 text-sm">24-03-2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
