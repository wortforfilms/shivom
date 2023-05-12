import { AnimatePresence, motion } from "framer-motion";

export const Container = (props: any) => {
  const { children, direction } = props;
  return <div className={`h-[90vh] w-full  ${direction && direction} py-6 overflow-auto z-0  sm:ml-0 p-1 sm:p-4`}>
    <AnimatePresence>

    <motion.div 
    
    initial={{x:100, opacity:0}}
    exit={{x:-100, opacity:0}}
    transition={{ ease: "easeOut", duration: 1 }}
    animate={{x:0,opacity:100}}
    
    className="max-w-3xl m-auto ">
    
    {children}
  </motion.div>
      </AnimatePresence>
    </div>
};


export const MContainer = (props: any) => {
  const { children, direction } = props;
  return <motion.div   
  className={`flex   w-full h-[90vh] overflow-auto  ${direction?direction:"flex-col"} py-2  p-2`}>    
    {children}
  </motion.div>;
};


export const AppContainer = (props: any) => {
  const { children } = props;
  return <div className="h-screen overflow-hidden bg-slate-100">
    {children}
    </div>
};
