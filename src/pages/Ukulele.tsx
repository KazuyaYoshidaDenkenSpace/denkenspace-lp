import { useEffect } from "react";
import SeoHead from "../components/SeoHead";
import { motion } from "framer-motion";

export default function Ukulele() {
  useEffect(() => {
    document.body.style.fontFamily = `'Baloo 2', 'M PLUS Rounded 1c', sans-serif`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1E293B] text-white relative overflow-hidden">
      <SeoHead
        title="デンケンウクレレ教室"
        description="初心者向けウクレレ教室の案内ページです。レッスン内容やスケジュールを掲載しています。"
        ogTitle="デンケンスペースウクレレ教室"
        ogDescription="初心者向けウクレレ教室の案内ページです。"
      />

      {/* ==== ヘッダー ==== */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/ukulele" className="text-2xl font-bold tracking-widest">
            <span className="hover:text-[#B91C1C]">デンケン</span>{" "}
            <span className="hover:text-[#B91C1C]">Ukulele</span>
          </a>
          <nav className="hidden md:flex gap-8 text-lg">
            <a
              href="https://forms.gle/a7JAF9tC2efurPhC8"
              target="_blank"
              className="hover:text-[#B91C1C]"
            >
              申し込み
            </a>
            <a href="#about" className="hover:text-[#B91C1C]">
              教室紹介
            </a>
            <a href="#schedule" className="hover:text-[#B91C1C]">
              スケジュール
            </a>
            <a href="#teacher" className="hover:text-[#B91C1C]">
              講師
            </a>
            <a href="#access" className="hover:text-[#B91C1C]">
              場所
            </a>
            <a href="#price" className="hover:text-[#B91C1C]">
              料金
            </a>
            <a href="#contact" className="hover:text-[#B91C1C]">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

{/* ==== ヒーロー ==== */}
<section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh] md:h-[90vh]">

  {/* 背景（スマホ＝縮小、PC＝カバー） */}
  <img
    src="/img/ukulele/ukulele.png"
    alt="ウクレレ教室背景"
    className="
      absolute inset-0 w-full h-full
      object-contain md:object-cover
      brightness-75
    "
    style={{ filter: "contrast(0.95) saturate(0.9) sepia(0.1)" }}
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

  {/* 落ち葉 */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <img
        key={i}
        src="/img/ukulele/snowflake.png"
        alt="紅葉"
        className="absolute animate-fall-leaf"
        style={{
          left: `${Math.random() * 100}%`,
          width: `${24 + Math.random() * 24}px`,
          height: `${24 + Math.random() * 24}px`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 6}s`,
        }}
      />
    ))}
  </div>

  {/* コンテンツ */}
  <motion.div
    className="relative z-10 text-[#fff0f5]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    <h1 className="absolute -left-[9999px]">デンケンUkulele</h1>

    {/* ボタン */}
<div className="flex justify-center gap-6 mt-[400px] md:mt-[260px]">
  <a
    href="https://www.instagram.com/denken_ukulele"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-[#B91C1C] text-white font-bold rounded-full shadow-md hover:bg-[#991B1B] transition flex items-center gap-2"
  >
    <img
      src="/img/common/instagram.png"
      alt="Instagram"
      className="w-5 h-5"
    />
    Instagram
  </a>

  <a
    href="https://forms.gle/a7JAF9tC2efurPhC8"
    target="_blank"
    className="px-8 py-4 bg-[#15803D] text-white font-bold rounded-full shadow-md hover:bg-[#166534] transition"
  >
    申し込み
  </a>
</div>

  </motion.div>

</section>



      {/* ==== 教室紹介 ==== */}
      <section id="about" className="py-24 px-6 md:px-20 bg-[#334155]">
        <h2 className="text-4xl font-bold mb-10 text-center tracking-widest">
          教室紹介
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
          ウクレレは、誰でもすぐに“音を出して楽しめる”楽器です。
          <br />
          デンケンウクレレ教室では、難しい理屈よりも「楽しむこと」からスタート！
          <br />
          初心者さんも、久しぶりに音楽に触れたい方も大歓迎です。
          <br />
          一緒にウクレレのやさしい音色を奏でましょう♪
        </p>
      </section>

      {/* ==== スケジュール ==== */}
      <section id="schedule" className="py-24 px-6 md:px-20 bg-[#1E293B]">
        <h2 className="text-4xl font-bold mb-10 text-center">スケジュール</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="p-6 bg-[#475569] border border-[#FFD700] rounded-lg shadow-md">
            <p className="font-semibold text-lg">
              12/21(日) 13:30 - 15:00 横浜校
            </p>
          </div>
        </div>
      </section>

      {/* ==== 講師紹介 ==== */}
      <section id="teacher" className="py-20 px-6 md:px-20 bg-[#334155] text-center">
        <h2 className="text-4xl font-bold mb-10">講師紹介</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <img
            src="/img/ukulele/ukulele_man.png"
            alt="講師"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <div className="max-w-lg text-left md:text-left">
            <h3 className="text-2xl font-semibold mb-3">よしだ かずや</h3>
            <p className="leading-relaxed">
              約10年間、地元・新潟でアコースティックギターによる路上ライブ活動をしてきました。
              <br />
              音楽を通じて楽しさを広めたいと思い、ウクレレに出会いました。
              <br />
              初心者向けレッスンも行っています♪
            </p>
          </div>
        </div>
      </section>

      {/* ==== アクセス ==== */}
      <section id="access" className="py-24 px-6 md:px-20 bg-[#1E293B]">
        <h2 className="text-4xl font-bold mb-10 text-center">場所</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* 横浜校 */}
          <div className="p-6 bg-[#475569] border border-[#FFD700] rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2　">横浜校</h3>
            <p>津多家 横浜鶴屋町店</p>
            <p>神奈川県横浜市神奈川区鶴屋町2-16-2 YT16ビル B1F</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/tsutaya_yokohama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#BB3E06] text-white rounded-full hover:bg-[#9B2E04] transition"
              >
                <img
                  src="/img/common/instagram.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==== 料金 ==== */}
　　　　<section id="price" className="py-20 px-6 md:px-20 bg-[#334155] text-center">
        <h2 className="text-4xl font-bold mb-10 text-center">料金</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="p-6 bg-[#475569] border border-[#FFD700] rounded-lg shadow-md">
            <p className="font-semibold text-lg">初回レッスン：500円</p>
          </div>
          <div className="p-6 bg-[#475569] border border-[#FFD700] rounded-lg shadow-md">
            <p className="font-semibold text-lg">2回目以降：1,500円</p>
          </div>
        </div>
      </section>

      {/* ==== お問い合わせ ==== */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-[#1E293B]">
        <h2 className="text-4xl font-bold mb-10 text-center">お問い合わせ</h2>
        <div className="flex justify-center">
          <a
            href="https://forms.gle/jf8uH5WyrrC6v7N47"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#B91C1C] text-white font-bold rounded-full shadow-md hover:bg-[#991B1B] transition flex items-center gap-2"
          >
            フォームへ
          </a>
        </div>
      </section>

      {/* ==== フッター ==== */}
      <footer className="py-8  text-center bg-[#0F172A]/80 border-b border-[#BB3E06]">
        <p>© 2025 デンケンスペース</p>
      </footer>

      {/* ==== 落ち葉アニメーション ==== */}
      <style>
        {`
        @keyframes fall-leaf {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(60vh) rotate(180deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall-leaf {
          animation: fall-leaf linear infinite;
        }
        `}
      </style>
    </div>
  );
}
