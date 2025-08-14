import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: "サービス1", desc: "サービス1の説明文" },
    { title: "サービス2", desc: "サービス2の説明文" },
    { title: "サービス3", desc: "サービス3の説明文" },
  ];

  return (
    <section className="w-full max-w-6xl px-6 py-12 flex flex-col items-center">
      <button
        className="px-6 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        サービス紹介
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full mt-6 overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-100 rounded shadow text-center mx-auto"
                >
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
