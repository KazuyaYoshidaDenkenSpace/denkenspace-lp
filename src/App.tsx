import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen ">
      {/* 固定ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="pt-12 flex flex-col items-center w-full">
        {[Hero, Services, About, Contact, Footer].map((Component, idx) => (
          <section
            key={idx}
            className="w-full max-w-6xl px-6 flex flex-col items-center text-center"
          >
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}
