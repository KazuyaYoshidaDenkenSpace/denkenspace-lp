import { HelmetProvider } from "react-helmet-async";
import SeoHead from "./components/SeoHead";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <SeoHead />
        <Header />
        <main className="pt-20 flex flex-col items-center w-full">
          <Hero />
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="message">
            <Message />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
