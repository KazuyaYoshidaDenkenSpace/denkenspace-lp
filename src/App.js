import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(HelmetProvider, { children: _jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(SeoHead, {}), _jsx(Header, {}), _jsxs("main", { className: "pt-20 flex flex-col items-center w-full", children: [_jsx(Hero, {}), _jsx("section", { id: "services", children: _jsx(Services, {}) }), _jsx("section", { id: "about", children: _jsx(About, {}) }), _jsx("section", { id: "message", children: _jsx(Message, {}) }), _jsx("section", { id: "contact", children: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }) }));
}
