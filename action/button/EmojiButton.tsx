import React from "react";
import { motion } from "framer-motion";


export const EmojiButton = (props: any) => {
  const {size, icon, action, color, cl } = props;
  return <motion.div
    whileHover={{ scale: .95 }}
    whileTap={{ scale: 1.1 }}
    onClick={() => {
      action();
    }}
    className={`w-10 h-10 ${cl} cursor-pointer hover:bg-yellow-300  border-2  border-gray-500 text-${color ? color : "red-500"} rounded-full ${size?size:"text-2xl"} bg-white text-center `}>{icon}</motion.div>;
};
