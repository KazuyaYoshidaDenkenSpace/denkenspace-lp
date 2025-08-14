import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutItems = [
  { title: "会社名", content: "株式会社デンケンスペース" },
  { title: "設立", content: "2024年2月" },
  { title: "代表取締役", content: "吉田 利也" },
  {
    title: "所在地",
    content: "〒220-0004 神奈川県横浜市西区北幸２丁目１０−４８ むつみビル 3階",
  },
];

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-6xl px-6 py-12 flex flex-col items-center">
      <button
        className="px-6 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        会社情報
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full mt-6 overflow-hidden bg-gray-50 rounded shadow p-6"
          >
            <div className="space-y-4">
              {aboutItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
