import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 shadow-lg">
      {/* 上段：ロゴ + ナビ */}
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
        <div className="text-3xl font-extrabold text-white tracking-wide">
          会社ロゴ
        </div>
        <nav className="space-x-8">
          <a
            href="#services"
            className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
          >
            サービス紹介
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
          >
            会社情報
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 font-medium transition-colors duration-300"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
