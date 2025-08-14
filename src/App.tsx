import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="header">
        <h1>Denkenspace</h1>
        <p>あなたのWebアイデアを形にします</p>
      </header>

      {/* メインセクション */}
      <main className="main">
        <section className="intro">
          <h2>サービス紹介</h2>
          <p>
            私たちは最新のWeb技術を駆使して、魅力的なランディングページを作成します。
          </p>
        </section>

        <section className="features">
          <h2>特徴</h2>
          <ul>
            <li>簡単に更新可能</li>
            <li>スマホ対応のレスポンシブデザイン</li>
            <li>高速表示でユーザーにストレスなし</li>
          </ul>
        </section>

        <section className="contact">
          <h2>お問い合わせ</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input type="text" name="name" placeholder="お名前" required />
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
            />
            <textarea
              name="message"
              placeholder="お問い合わせ内容"
              required
            />
            <button type="submit">送信</button>
          </form>
        </section>
      </main>

      {/* フッター */}
      <footer className="footer">
        <p>&copy; 2025 Denkenspace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
