import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ===== ヘッダー ===== */}
      <header className="header">
        <div className="container">
          <h1 className="site-title">Denkenspace</h1>
          <p className="site-tagline">あなたのWebアイデアを形にします</p>
        </div>
      </header>

      {/* ===== メインコンテンツ ===== */}
      <main>
        {/* サービス紹介 */}
        <section className="section intro">
          <div className="container">
            <h2>サービス紹介</h2>
            <p>
              最新のWeb技術を活用し、魅力的で成果の出るランディングページを制作いたします。
            </p>
          </div>
        </section>

        {/* 特徴 */}
        <section className="section features">
          <div className="container">
            <h2>特徴</h2>
            <ul>
              <li>誰でも簡単に更新可能</li>
              <li>スマホ・タブレット対応のレスポンシブデザイン</li>
              <li>高速表示でユーザー体験を向上</li>
            </ul>
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section className="section contact">
          <div className="container">
            <h2>お問い合わせ</h2>
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <button type="submit" className="btn-primary">
                送信
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ===== フッター ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Denkenspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
