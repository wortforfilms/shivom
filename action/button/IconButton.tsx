import React from "react";
import { motion } from "framer-motion";



export const IconButton = (props: any) => {
  const { icon, action, color, bg, cl } = props;
  return <motion.div
    whileHover={{ scale: .95 }}
    whileTap={{ scale: 1.1 }}
    onClick={() => {
      action();
    }}
    className={`${cl && cl} w-9 h-9 cursor-pointer hover:bg-gray-400 hover:text-white border-2 mt-1 border-gray-500 text-${color?color:"red-500"} rounded-full text-2xl ${bg?bg:"bg-white"} text-center p-1`}>{icon}</motion.div>;
};



