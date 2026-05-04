import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Info, Target, Users } from "lucide-react";

const About: React.FC = () => {
  const { t } = useTranslation();

  const aboutItems = t("about.items", { returnObjects: true }) as {
    title: string;
    content: string;
    icon?: string;
  }[];

  const icons: Record<string, React.ReactNode> = {
    info: <Info className="w-6 h-6 text-cyan-300" />,
    target: <Target className="w-6 h-6 text-cyan-300" />,
    users: <Users className="w-6 h-6 text-cyan-300" />,
  };

  return (
    <section className="w-full max-w-6xl px-6 py-16 mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {t("about.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {aboutItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex gap-4"
          >
            {/* アイコン */}
            <div className="flex-shrink-0">
              {item.icon && (
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
                  {icons[item.icon]}
                </div>
              )}
            </div>

            {/* テキスト */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-300">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
