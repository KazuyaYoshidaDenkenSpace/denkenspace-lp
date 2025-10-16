import { useEffect } from "react";
import SeoHead from "../components/SeoHead";
import { motion } from "framer-motion";

export default function Ukulele() {
  useEffect(() => {
    document.body.style.fontFamily = `'Baloo 2', 'M PLUS Rounded 1c', sans-serif`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff0f5] text-[#4b3a3a] relative overflow-hidden">
      <SeoHead
        title="デンケンウクレレ教室"
        description="初心者向けウクレレ教室の案内ページです。レッスン内容やスケジュールを掲載しています。"
        ogTitle="デンケンスペースウクレレ教室"
        ogDescription="初心者向けウクレレ教室の案内ページです。"
      />

      {/* ==== ヘッダー ==== */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#fff0f5]/80 border-b border-[#f7cce0]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/ukulele" className="text-2xl font-bold tracking-widest">
            デンケン<span className="text-[#f7a8c4]">Ukulele</span>
          </a>
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#top" className="hover:text-[#f7a8c4]">
              申し込み
            </a>
            <a href="#about" className="hover:text-[#f7a8c4]">
              教室紹介
            </a>
            <a href="#schedule" className="hover:text-[#f7a8c4]">
              スケジュール
            </a>
            <a href="#price" className="hover:text-[#f7a8c4]">
              料金
            </a>
            <a href="#teacher" className="hover:text-[#f7a8c4]">
              講師
            </a>
            <a href="#access" className="hover:text-[#f7a8c4]">
              場所
            </a>
            <a href="#contact" className="hover:text-[#f7a8c4]">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* ==== ヒーロー（落ち葉つき） ==== */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* 背景 */}
        <img
          src="/img/ukulele/ukulele.png"
          alt="ウクレレ教室背景"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          style={{ filter: "contrast(0.95) saturate(0.9) sepia(0.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

        {/* 落ち葉 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src="/img/ukulele/maple_leaf.png"
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

        {/* タイトル */}
        <motion.div
          className="relative z-10 text-[#fff0f5]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(255,200,100,0.4)]">
            デンケン
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
              ウクレレ教室
            </span>
          </h1>
          <p className="text-2xl mb-10 font-medium tracking-wide">
            音楽の秋、一緒に奏でよう♪
          </p>

          {/* ボタン */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://forms.gle/a7JAF9tC2efurPhC8"
              className="px-8 py-4 bg-pink-300 text-white font-bold rounded-full shadow-md hover:bg-pink-400 transition"
            >
              申し込み
            </a>
            <a
              href="https://www.instagram.com/denken_ukulele"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-300 text-white font-bold rounded-full shadow-md hover:bg-orange-400 transition flex items-center gap-2"
            >
              <img
                src="/img/common/instagram.png"
                alt="Instagram"
                className="w-5 h-5"
              />
              Instagram
            </a>
          </div>

          {/* ↓ スクロール誘導 */}
          <motion.a
            href="#about"
            className="mt-10 inline-block text-[#f7a8c4] text-lg border border-[#f7a8c4] rounded-full px-6 py-3 hover:bg-[#f7a8c4] hover:text-[#4b3a3a] transition-all"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ↓ Learn More
          </motion.a>
        </motion.div>
      </section>

      {/* ==== 教室紹介 ==== */}
      <section id="about" className="py-24 px-6 md:px-20 bg-[#fff7fa]">
        <h2 className="text-4xl font-bold mb-10 text-center tracking-widest">
          教室紹介
        </h2>
        <p className="text-lg text-[#6b4f4f] max-w-3xl mx-auto text-center leading-relaxed">
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
      <section id="schedule" className="py-24 px-6 md:px-20 bg-[#fff0f5]">
        <h2 className="text-4xl font-bold mb-10 text-center">スケジュール</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="p-6 bg-[#fff7fa] border border-[#f7cce0] rounded-lg shadow-md">
            <p className="font-semibold text-lg">
              11/16(日) 15:00 - 16:30 横浜校
            </p>
          </div>
          <div className="p-6 bg-[#fff7fa] border border-[#f7cce0] rounded-lg shadow-md">
            <p className="font-semibold text-lg">
              11/25(土) 17:30 - 19:30 雑色校
            </p>
          </div>
        </div>
      </section>

      {/* ==== 料金 ==== */}
      <section id="price" className="py-24 px-6 md:px-20 bg-[#fff7fa]">
        <h2 className="text-4xl font-bold mb-10 text-center">料金</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center text-[#6b4f4f]">
          <div className="p-6 bg-[#fff0f5] border border-[#f7cce0] rounded-lg shadow-md">
            <p className="font-semibold text-lg">初回レッスン：500円</p>
          </div>
          <div className="p-6 bg-[#fff0f5] border border-[#f7cce0] rounded-lg shadow-md">
            <p className="font-semibold text-lg">2回目以降：2,000円</p>
          </div>
          <div className="p-6 bg-[#fff0f5] border border-[#f7cce0] rounded-lg shadow-md">
            <p className="font-semibold text-lg">
              ウクレレをお持ちでない方には貸出可能です。
              申し込みフォームで「ウクレレ貸出希望」を選択してください。
            </p>
          </div>
        </div>
      </section>

      {/* ==== 講師紹介 ==== */}
      <section
        id="teacher"
        className="py-20 px-6 md:px-20 bg-[#fff7fa] text-center"
      >
        <h2 className="text-4xl font-bold mb-10">講師紹介</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <img
            src="/img/ukulele/ukulele_man.png"
            alt="講師"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <div className="max-w-lg text-left md:text-left">
            <h3 className="text-2xl font-semibold mb-3">よしだ かずや</h3>
            <p className="text-[#6b4f4f] leading-relaxed">
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
      <section id="access" className="py-24 px-6 md:px-20 bg-[#fff0f5]">
        <h2 className="text-4xl font-bold mb-10 text-center">場所</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-[#fff7fa] border border-[#f7cce0] p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">横浜校</h3>
            <p>津多家横浜鶴屋町店</p>
            <p>〒221-0835 神奈川県横浜市神奈川区鶴屋町2丁目16</p>
          </div>
          <div className="bg-[#fff7fa] border border-[#f7cce0] p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">雑色校</h3>
            <p>bar nosta(バーノスタ)</p>
            <p>〒144-0055 東京都大田区仲六郷2丁目11−5</p>
          </div>
        </div>
      </section>

      {/* ==== お問い合わせ ==== */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-[#fff7fa]">
        <h2 className="text-4xl font-bold mb-10 text-center">お問い合わせ</h2>
        <div className="flex justify-center">
          <a
            href="https://forms.gle/jf8uH5WyrrC6v7N47"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-[#f7a8c4] text-[#f7a8c4] text-lg font-semibold rounded-full hover:bg-[#f7a8c4] hover:text-white transition-all"
          >
            フォームへ
          </a>
        </div>
      </section>

      {/* ==== フッター ==== */}
      <footer className="py-8 bg-[#f7cce0] text-center text-[#4b3a3a]">
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
