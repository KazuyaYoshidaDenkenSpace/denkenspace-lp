import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-6xl px-6 py-12 flex flex-col items-center">
      <button
        className="px-6 py-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        お問い合わせ
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
            <div className="max-w-3xl mx-auto px-6">
              <iframe
                src="https://forms.gle/ufZnNjB824YsAasb9?embedded=true"
                width="100%"
                height={800}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="お問い合わせフォーム"
              >
                読み込んでいます…
              </iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
