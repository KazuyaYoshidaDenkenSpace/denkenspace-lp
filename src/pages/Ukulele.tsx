import { useEffect } from "react";
import SeoHead from "../components/SeoHead";
import { motion } from "framer-motion";

export default function Ukulele() {
  useEffect(() => {
    document.body.style.fontFamily = `'Kiwi Maru', serif`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#2B5876] text-[#F1F8E9] relative overflow-x-hidden">
      <SeoHead
        title="デンケンウクレレ教室"
        description="初心者向けウクレレ教室の案内ページです。レッスン内容やスケジュールを掲載しています。"
        ogTitle="デンケンスペースウクレレ教室"
        ogDescription="初心者向けウクレレ教室の案内ページです。"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&display=swap"
        rel="stylesheet"
      />
      {/* ==== ヘッダー ==== */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1E415A]/30 border-none outline-none">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <a
            href="/ukulele"
            className="text-2xl font-bold tracking-widest text-white"
          >
            <span className="hover:text-[#D94333] transition-colors">
              デンケン
            </span>{" "}
            <span className="hover:text-[#D94333] transition-colors">
              Ukulele
            </span>
          </a>
          <nav className="hidden md:flex gap-8 text-lg font-medium text-white/90">
            <a href="#about" className="hover:text-[#D9A036] transition-colors">
              教室紹介
            </a>
            <a
              href="#schedule"
              className="hover:text-[#D9A036] transition-colors"
            >
              スケジュール
            </a>
            <a
              href="#access"
              className="hover:text-[#D9A036] transition-colors"
            >
              場所
            </a>
            <a href="#price" className="hover:text-[#D9A036] transition-colors">
              料金
            </a>
            <a
              href="#contact"
              className="hover:text-[#D9A036] transition-colors"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>
      {/* ==== ヒーロー ==== */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div
          className="relative aspect-[16/9] bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: "url('/img/ukulele/ukulele.png')",
          }}
        >
          {/* 【重要】上部の隙間感を消すためのグラデーション */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1E415A]/80 via-[#1E415A]/20 to-transparent z-0" />

          {/* 下部グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#D6E6F2]" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src="/img/ukulele/snowflake.png"
                alt=""
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

          <motion.div
            className="absolute inset-x-0 bottom-8 md:bottom-16 z-10 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="sr-only">デンケンUkulele</h1>
            <div className="flex justify-center gap-4 md:gap-8">
              <a
                href="https://www.instagram.com/denken_ukulele"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 md:px-8 md:py-4 bg-[#D94333] text-white font-bold rounded-full shadow-lg hover:bg-[#b53428] transition flex items-center gap-2 text-sm md:text-base"
              >
                <img
                  src="/img/common/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 md:w-5 md:h-5 invert"
                />
                Instagram
              </a>
              <a
                href="https://forms.gle/a7JAF9tC2efurPhC8"
                target="_blank"
                className="px-6 py-3 md:px-8 md:py-4 bg-[#A67C52] text-white font-bold rounded-full shadow-lg hover:bg-[#8d6945] transition text-sm md:text-base"
              >
                申し込み
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== 教室紹介 ==== */}
      <section
        id="about"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#D6E6F2] to-white text-[#1E415A]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 tracking-widest relative inline-block">
            教室紹介
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#A67C52]"></span>
          </h2>
          <p className="text-lg leading-relaxed font-medium">
            ウクレレは、誰でもすぐに“音を出して楽しめる”楽器です。
            <br />
            デンケンウクレレ教室では、難しい理屈よりも「楽しむこと」からスタート！
            <br />
            初心者さんも、久しぶりに音楽に触れたい方も大歓迎です。
            <br />
            一緒にウクレレのやさしい音色を奏でましょう♪
          </p>
        </div>
      </section>

      {/* ==== スケジュール ==== */}
      <section
        id="schedule"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-[#1E415A]"
      >
        <h2 className="text-4xl font-bold mb-16 text-center tracking-widest uppercase text-[#1E415A]">
          Schedule
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* 横浜校スケジュール */}
          <div className="p-10 bg-[#1E415A]/60 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl text-center flex flex-col justify-center min-h-[300px]">
            <p className="text-[#D9A036] font-extrabold text-sm mb-6 uppercase tracking-[0.2em] drop-shadow-sm">
              横浜校 津多家 横浜鶴屋町店
            </p>
            <div className="mb-6">
              <p className="text-[#F1F8E9] text-xs font-bold mb-2 italic tracking-widest opacity-90">
                NEXT LESSON
              </p>
              <p className="font-bold text-6xl text-white drop-shadow-md">
                01.25
                <span className="text-[#D94333] ml-2 text-3xl italic font-black">
                  sun
                </span>
              </p>
            </div>
            <p className="text-2xl text-[#F1F8E9] font-bold drop-shadow-sm">
              13:30 - 15:00
            </p>
          </div>

          {/* 大田区校スケジュール (日程調整中) */}
          <div className="p-10 bg-[#1E415A]/40 backdrop-blur-lg border border-white/10 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center min-h-[300px]">
            <p className="text-white/50 font-bold text-sm mb-6 uppercase tracking-[0.2em]">
              大田区校 ビストロ クープー
            </p>
            <div className="mb-4">
              <p className="font-bold text-3xl text-white/90 tracking-tight drop-shadow-sm">
                日程調整中
              </p>
            </div>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              開催が決まり次第、
              <br className="md:hidden" />
              こちらでお知らせいたします
            </p>
          </div>
        </div>
      </section>

      {/* ==== 講師紹介 ==== */}
      <section
        id="teacher"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#1E415A] to-[#D6E6F2] text-[#1E415A]"
      >
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="relative">
            <div className="absolute inset-0 border-4 border-[#A67C52] rounded-full scale-105 opacity-50"></div>
            <img
              src="/img/ukulele/ukulele_man.png"
              alt="講師"
              className="w-48 h-48 object-cover rounded-full shadow-lg relative z-10"
            />
          </div>
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-4 border-l-4 border-[#A67C52] pl-4">
              よしだ かずや
            </h3>
            <p className="leading-relaxed text-[#1E415A]/80 font-medium">
              約10年間、地元・新潟でアコースティックギターによる路上ライブ活動をしてきました。
              音楽を通じて楽しさを広めたいと思い、ウクレレに出会いました。
            </p>
          </div>
        </div>
      </section>

      {/* ==== 場所 ==== */}
      <section
        id="access"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#D6E6F2] to-white text-[#1E415A]"
      >
        <h2 className="text-4xl font-bold mb-16 text-center tracking-widest uppercase text-[#1E415A]">
          Access
        </h2>

        {/* 横並びにするための設定: grid-cols-1 (スマホ) / lg:grid-cols-2 (PC) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 横浜校 */}
          <div className="p-8 bg-white border-2 border-[#D6E6F2] rounded-[2.5rem] shadow-sm flex flex-col h-full">
            <div className="flex-grow">
              <div className="inline-block px-4 py-1 bg-[#D94333] text-white text-sm font-bold rounded-md mb-4">
                横浜校
              </div>
              <h3 className="font-bold text-2xl mb-3 text-[#1E415A]">
                津多家 横浜鶴屋町店
              </h3>
              <p className="text-[#1E415A]/70 leading-relaxed font-medium mb-6">
                神奈川県横浜市神奈川区鶴屋町2-16-2
                <br />
                YT16ビル B1F
              </p>
              <a
                href="https://www.instagram.com/tsutaya_yokohama/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A67C52] text-white rounded-xl hover:bg-[#8d6945] transition-all font-bold text-sm mb-8"
              >
                <img
                  src="/img/common/instagram.png"
                  alt=""
                  className="w-4 h-4 invert"
                />
                インスタグラム
              </a>
            </div>
            {/* 横浜地図: 正しい埋め込みURLに修正済 */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-[#D6E6F2]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.444908022718!2d139.62067757623663!3d35.46853604163939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c139703b603%3A0x6ec0c5ec796a5828!2z5rSl5aSa5a62IOaoquW some5ba75bGL55S65bqX!5e0!3m2!1sja!2sjp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="横浜校 地図"
              ></iframe>
            </div>
          </div>

          {/* 大田区校 */}
          <div className="p-8 bg-white border-2 border-[#D6E6F2] rounded-[2.5rem] shadow-sm flex flex-col h-full">
            <div className="flex-grow">
              <div className="inline-block px-4 py-1 bg-[#D94333] text-white text-sm font-bold rounded-md mb-4">
                大田区校
              </div>
              <h3 className="font-bold text-2xl mb-3 text-[#1E415A]">
                ビストロ クープー
              </h3>
              <p className="text-[#1E415A]/70 leading-relaxed font-medium mb-6">
                東京都大田区仲六郷2-20-10
                <br />
                (雑色駅から徒歩3分)
              </p>
              <a
                href="https://www.instagram.com/bistro_cou_cou/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A67C52] text-white rounded-xl hover:bg-[#8d6945] transition-all font-bold text-sm mb-8"
              >
                <img
                  src="/img/common/instagram.png"
                  alt=""
                  className="w-4 h-4 invert"
                />
                インスタグラム
              </a>
            </div>
            {/* 大田区地図: 正しい埋め込みURLに修正済 */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-[#D6E6F2]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.286377317789!2d139.71158567624147!3d35.549114237149025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018608882585913%3A0xe781907572714a5b!2z44OT44K544OI44OtIOOCr-ODvOODvOODvA!5e0!3m2!1sja!2sjp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="大田区校 地図"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ==== 料金 ==== */}
      <section
        id="price"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-[#D6E6F2] text-[#1E415A]"
      >
        <h2 className="text-4xl font-bold mb-12 text-center tracking-widest">
          料金
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="p-10 bg-white rounded-3xl shadow-xl border-b-8 border-[#D9A036]">
            <p className="text-[#D9A036] font-bold text-sm mb-2 uppercase">
              Trial
            </p>
            <p className="text-2xl font-bold mb-2">初回レッスン</p>
            <p className="text-4xl font-black text-[#D94333]">500円</p>
          </div>
          <div className="p-10 bg-white rounded-3xl shadow-xl border-b-8 border-[#A67C52]">
            <p className="text-[#A67C52] font-bold text-sm mb-2 uppercase">
              Regular
            </p>
            <p className="text-2xl font-bold mb-2">2回目以降</p>
            <p className="text-4xl font-black">2,000円</p>
          </div>
        </div>
      </section>

      {/* ==== お問い合わせ (URLを修正) ==== */}
      <section
        id="contact"
        className="py-28 px-6 md:px-20 bg-gradient-to-b from-[#D6E6F2] to-[#1E415A] text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#1E415A] tracking-tight">
            お問い合わせ
          </h2>
          <p className="text-[#1E415A]/80 mb-12 text-lg font-medium leading-relaxed">
            レッスン内容へのご質問や、楽器の相談、見学の希望など、
            <br />
            どんなことでもお気軽にお送りください！
          </p>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12">
            {/* 左側：申し込み専用（赤） */}
            <a
              href="https://forms.gle/a7JAF9tC2efurPhC8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center p-8 bg-[#D94333] text-white rounded-[2rem] shadow-xl hover:scale-105 transition-all"
            >
              <span className="text-sm opacity-80 mb-2 uppercase tracking-widest">
                Entry
              </span>
              <span className="text-2xl font-bold">体験レッスン申込</span>
            </a>

            {/* 右側：お問い合わせ専用（ウクレレカラー） */}
            <a
              href="https://forms.gle/jf8uH5WyrrC6v7N47"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center p-8 bg-[#A67C52] text-white rounded-[2rem] shadow-xl hover:scale-105 transition-all"
            >
              <span className="text-sm opacity-80 mb-2 uppercase tracking-widest">
                Contact
              </span>
              <span className="text-2xl font-bold">ご質問・お問い合わせ</span>
            </a>
          </div>

          <p className="text-white/40 text-sm">
            ※通常2〜3日以内に返信させていただきます。
          </p>
        </div>
      </section>
      {/* ==== フッター ==== */}
      <footer className="py-12 text-center bg-[#0F172A] border-t border-white/10">
        <p className="text-white/40 text-sm tracking-widest">
          © 2025 デンケンスペース
        </p>
      </footer>

      <style>
        {`
        @keyframes fall-leaf {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          50% { transform: translateY(60vh) rotate(180deg); opacity: 0.9; }
          100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall-leaf { animation: fall-leaf linear infinite; }
        `}
      </style>
    </div>
  );
}
