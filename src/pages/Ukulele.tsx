import SeoHead from "../components/SeoHead";

export default function Ukulele() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-yellow-100 to-orange-50 relative overflow-hidden">
      <SeoHead
        title="デンケンウクレレ教室"
        description="初心者向けウクレレ教室の案内ページです。レッスン内容や料金、スケジュールを掲載しています。"
        ogTitle="デンケンスペースウクレレ教室"
        ogDescription="初心者向けウクレレ教室の案内ページです。"
      />

      {/* 落ち葉アニメーション */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src="/img/ukulele/maple_leaf.png" // 紅葉のSVG
            className="absolute w-6 h-6 animate-fall-leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
            }}
            alt="紅葉"
          />
        ))}
      </div>
      {/* ヒーロー */}
      <section className="text-center py-28 bg-orange-200 relative z-10">
        <h1 className="text-5xl font-extrabold text-orange-900 mb-4">
          デンケン ウクレレ教室
        </h1>
        <p className="text-xl text-orange-800 max-w-2xl mx-auto mb-8">
          初心者から経験者まで楽しめるウクレレ教室。音楽の楽しさを一緒に体感しましょう！
        </p>

        {/* アクションボタン */}
        <div className="flex justify-center gap-6">
          <a
            href="https://docs.google.com/forms/d/XXXXX/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg shadow hover:bg-orange-700 transition"
          >
            お問い合わせフォーム
          </a>
          <a
            href="https://www.instagram.com/denkenspace"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition flex items-center gap-2"
          >
            <img
              src="img/common/instagram.png"
              alt="Instagram"
              className="w-5 h-5"
            />
            Instagram
          </a>
        </div>
      </section>

      {/* 教室紹介 */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">教室紹介</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          デンケンウクレレ教室では、基礎から丁寧にレッスンを行います。楽器が初めての方も安心して参加できます。
        </p>
      </section>

      {/* スケジュール */}
      <section className="py-16 px-6 md:px-20 bg-orange-50">
        <h2 className="text-3xl font-bold mb-10 text-center">スケジュール</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="p-6 bg-orange-100 rounded-lg shadow-lg">
            <p className="font-semibold text-lg">
              11/16(日) 15:00 - 16:30 横浜校
            </p>
          </div>
          <div className="p-6 bg-orange-100 rounded-lg shadow-lg">
            <p className="font-semibold text-lg">
              11/25(土) 17:30 - 19:30 雑色校
            </p>
          </div>
        </div>
      </section>

      {/* 講師紹介 */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">講師紹介</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="text-center">
            <img
              src="/img/ukulele/ukulele_man.png"
              alt="講師"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">よしだ かずや</h3>
            <p className="text-gray-700">
              ウクレレ歴5年、講師歴1年目。楽しく学べるレッスンを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* 場所 */}
      <section className="py-16 px-6 md:px-20 bg-orange-50">
        <h2 className="text-3xl font-bold mb-6 text-center">場所</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-2">横浜校</h3>
            <p>津多家横浜鶴屋町店</p>
            <p>
              〒221-0835 神奈川県横浜市神奈川区鶴屋町2丁目16 2YTビル 地下1階
            </p>
            <p>営業時間：16:00 - 23:00</p>
            <p>定休日：月曜日</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-2">雑色校</h3>
            <p>bar nosta(バーノスタ)</p>
            <p>〒144-0055 東京都大田区仲六郷2丁目11−5</p>
            <p>営業時間：19:00 - 1:00</p>
            <p>定休日：日曜日</p>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 px-6 md:px-20 bg-orange-200">
        <h2 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-4 items-center">
          <a
            href="https://docs.google.com/forms/d/XXXXX/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
          >
            お問い合わせフォームへ
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-orange-300 text-center text-gray-800 flex flex-col items-center gap-2">
        <p>© 2025 デンケンスペース</p>
        <a
          href="https://www.instagram.com/denkenspace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-900 font-semibold hover:underline flex items-center gap-2"
        >
          <img
            src="img/common/instagram.png"
            alt="Instagram"
            className="w-5 h-5"
          />
          Instagram
        </a>
      </footer>

      <style>
        {`
@keyframes fall-leaf {
  0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
  50% { transform: translateY(50vh) rotate(180deg); }
  100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
}
.animate-fall-leaf {
  animation: fall-leaf 8s linear infinite;
}
`}
      </style>
    </div>
  );
}
