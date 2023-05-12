import React from "react";
import { motion } from "framer-motion";



export const IconButtonSmall = (props: any) => {
  const { icon, action, color, cl } = props;
  return <motion.div
    whileHover={{ scale: .95 }}
    whileTap={{ scale: 1.1 }}
    onClick={() => {
      action();
    }}
    className={`w-6 h-6 ${cl && cl} cursor-pointer hover:bg-gray-400 hover:text-white border-2  border-gray-500 text-${color ? color : "red-500"} rounded-full text-xs  bg-white p-1  `}>{icon}</motion.div>;
};
