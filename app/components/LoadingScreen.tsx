"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            flex-col
            items-center
            justify-center
            bg-slate-950
            text-white
          "
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-7xl"
          >
            🇧🇦
          </motion.div>

          <h1 className="mt-8 text-4xl font-black">
            Bosna Pusulası
          </h1>

          <p className="mt-3 text-slate-400">
            Bosna sizi bekliyor...
          </p>

          <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="h-full w-1/2 bg-blue-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}