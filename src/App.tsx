import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./i18n"; // 多言語化設定（i18nextの初期化）
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { t, i18n } = useTranslation();

  // 言語切替のたびにタイトルと <html lang="..."> を更新
  useEffect(() => {
    document.title = t("meta.title"); // 翻訳ファイルで管理しているタイトルを使用
    document.documentElement.lang = i18n.language; // HTMLタグのlang属性を切替
  }, [i18n.language, t]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 固定ヘッダー（上部ナビゲーション） */}
      <Header />

      {/* メインコンテンツ */}
      <main className="pt-12 flex flex-col items-center w-full">
        {/* ヒーローセクション（トップのキャッチコピーなど） */}
        <Hero />

        {/* サービス紹介 */}
        <section
          id="services"
          className="w-full max-w-6xl px-6 py-20 text-center"
        >
          <Services />
        </section>

        {/* 会社概要 */}
        <section id="about" className="w-full max-w-6xl px-6 py-20 text-center">
          <About />
        </section>

        {/* 代表メッセージ（社長挨拶） */}
        <section
          id="message"
          className="w-full max-w-6xl px-6 py-20 text-center"
        >
          <Message />
        </section>

        {/* お問い合わせフォーム */}
        <section
          id="contact"
          className="w-full max-w-6xl px-6 py-20 text-center"
        >
          <Contact />
        </section>
      </main>

      {/* フッター（SNSリンク、コピーライト） */}
      <Footer />
    </div>
  );
}
