import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Code, Layout, Music } from "lucide-react";

type ServiceItem = {
  title: string;
  desc: string;
  img: string;
  url?: string;
  urlLabel?: string;
};

const TiltCard: React.FC<{
  service: ServiceItem;
  icon: React.ReactNode;
  index: number;
}> = ({ service, icon, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-120, 120], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-120, 120], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });
  const gx = useTransform(x, [-200, 200], [0, 100]);
  const gy = useTransform(y, [-200, 200], [0, 100]);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={service.url || "#"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_4px_24px_-6px_rgba(14,165,233,0.12)] transition-shadow hover:shadow-[0_30px_70px_-15px_rgba(14,165,233,0.3)] overflow-hidden"
    >
      {/* ホバー時に光が走るグラデーション */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [gx, gy],
            ([gxv, gyv]) =>
              `radial-gradient(400px circle at ${gxv}% ${gyv}%, rgba(14,165,233,0.15), transparent 50%)`
          ),
        }}
      />

      {service.img && (
        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative mb-6 h-40 w-full overflow-hidden rounded-2xl bg-slate-100"
        >
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      <div
        style={{ transform: "translateZ(30px)" }}
        className="relative flex-1 flex flex-col"
      >
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md group-hover:shadow-lg transition-shadow">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {service.desc}
        </p>

        {service.url && (
          <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-sky-600 group-hover:text-sky-700">
            <span>{service.urlLabel || "詳しく見る"}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </motion.a>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services =
    (t("services.items", { returnObjects: true }) as ServiceItem[] | undefined) ||
    [];

  const icons = [
    <Code className="h-6 w-6" />,
    <Layout className="h-6 w-6" />,
    <Music className="h-6 w-6" />,
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-sky-600 mb-3">
            SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("services.title", "サービス紹介")}
          </h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <TiltCard
              key={i}
              service={s}
              icon={icons[i] || icons[0]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
