import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import CodeWindow from "./CodeWindow";

const MagneticButton: React.FC<{
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}> = ({ href, primary, children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={
        primary
          ? "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-8 py-3.5 text-sm md:text-base font-bold text-white shadow-[0_10px_30px_-5px_rgba(14,165,233,0.5)] transition-shadow hover:shadow-[0_20px_50px_-5px_rgba(14,165,233,0.7)]"
          : "group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-8 py-3.5 text-sm md:text-base font-bold text-slate-700 backdrop-blur-md transition-colors hover:bg-white hover:border-sky-300 hover:text-sky-700"
      }
    >
      {children}
    </motion.a>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // mouse follow spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const bg = useMotionTemplate`radial-gradient(700px circle at ${mx}% ${my}%, rgba(14,165,233,0.18), transparent 55%)`;

  const onSectionMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      onMouseMove={onSectionMove}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50 to-emerald-50/60"
    >
      {/* マウス追従スポットライト (デスクトップのみ・モバイルでは負荷削減) */}
      <motion.div
        aria-hidden
        style={{ background: bg }}
        className="pointer-events-none absolute inset-0 hidden md:block"
      />

      {/* 柔らかいグラデーションオーブ (モバイルは小さめ静的・デスクトップはアニメ) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[280px] w-[280px] rounded-full bg-sky-200/50 blur-[90px] md:hidden"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-sky-200/60 blur-[120px] hidden md:block"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-emerald-200/60 blur-[140px] hidden md:block"
        animate={{ x: [0, -50, 30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ドットグリッド */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,165,233,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* 下端フェード */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
        {/* 左：テキスト */}
        <div className="min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* バッジ */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs md:text-sm text-sky-700 backdrop-blur-md shadow-sm"
          >
            <Terminal className="h-3.5 w-3.5 text-sky-500" />
            <span className="tracking-wider font-semibold">
              Web System × SaaS Development
            </span>
          </motion.div>

          {/* タイトル */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2rem] sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5rem] font-black tracking-tight leading-[1.1] text-slate-900"
          >
            {t("hero.title")
              .split("\n")
              .map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  <span className="bg-gradient-to-br from-slate-900 via-sky-700 to-emerald-600 bg-clip-text text-transparent">
                    {line}
                  </span>
                </span>
              ))}
          </motion.h1>

          {/* アクセントライン */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-px w-24 origin-left bg-gradient-to-r from-sky-400 via-emerald-400 to-transparent"
          />

          {/* キャッチコピー */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg md:text-2xl text-slate-700 font-bold leading-relaxed"
          >
            {t(
              "hero.catch",
              "想いをカタチに。確かな技術で、ビジネスの成長を支えるWebシステムを。"
            )}
          </motion.p>

          {/* サブテキスト */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-4 max-w-xl text-sm md:text-base text-slate-500 leading-relaxed"
          >
            {t(
              "hero.subtitle",
              "10年以上のバックエンド開発経験を活かし、要件定義から設計・実装・運用まで一貫してサポート。"
            )}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton href="#contact" primary>
              <Sparkles className="h-4 w-4" />
              <span>無料で相談する</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#services">
              <span>サービスを見る</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* 右：コードウィンドウ */}
        <div className="relative min-w-0 flex justify-center lg:justify-end">
          {/* 浮遊バッジ */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 },
              scale: { duration: 0.6, delay: 0.8 },
              y: { duration: 4, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -top-4 -left-2 lg:-left-6 z-20 rounded-full bg-white shadow-lg border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-700"
          >
            <span className="text-emerald-500">●</span> 10+ years backend
          </motion.div>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1.0 },
              scale: { duration: 0.6, delay: 1.0 },
              y: { duration: 5, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -bottom-3 -right-2 lg:-right-4 z-20 rounded-full bg-white shadow-lg border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-700"
          >
            <span className="text-sky-500">●</span> Full-stack & SaaS
          </motion.div>

          <CodeWindow />
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] tracking-[0.3em] font-semibold">SCROLL</span>
        <div className="relative h-10 w-px overflow-hidden bg-slate-200">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sky-400 to-transparent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
