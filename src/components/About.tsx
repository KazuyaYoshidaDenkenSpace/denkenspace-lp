import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Building2, Calendar, User, MapPin, Info, Target, Users } from "lucide-react";

const About: React.FC = () => {
  const { t } = useTranslation();

  const aboutItems = t("about.items", { returnObjects: true }) as {
    title: string;
    content: string;
    icon?: string;
  }[];

  const fallbackIcons = [
    <Building2 className="h-5 w-5" />,
    <Calendar className="h-5 w-5" />,
    <User className="h-5 w-5" />,
    <MapPin className="h-5 w-5" />,
  ];

  const namedIcons: Record<string, React.ReactNode> = {
    info: <Info className="h-5 w-5" />,
    target: <Target className="h-5 w-5" />,
    users: <Users className="h-5 w-5" />,
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50/40 to-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-sky-600 mb-3">
            ABOUT
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t("about.title", "会社情報")}
          </h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-2 gap-4">
          {aboutItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-sky-200"
            >
              <div className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-600 group-hover:from-sky-500 group-hover:to-emerald-500 group-hover:text-white transition-all">
                {item.icon ? namedIcons[item.icon] : fallbackIcons[idx % fallbackIcons.length]}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1">
                  {item.title}
                </p>
                <p className="text-base text-slate-800 font-semibold leading-relaxed break-words">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
