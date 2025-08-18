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
    info: <Info className="w-6 h-6 text-blue-600" />,
    target: <Target className="w-6 h-6 text-blue-600" />,
    users: <Users className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section className="w-full max-w-6xl px-6 py-12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("about.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {aboutItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-4"
          >
            {/* アイコン */}
            <div className="flex-shrink-0">{item.icon && icons[item.icon]}</div>

            {/* テキスト */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
