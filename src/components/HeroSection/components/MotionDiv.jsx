import React from "react";
import { motion } from "framer-motion";

export default function MotionDiv({ children, styles }) {
  return (
    <motion.div
      className={styles}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
