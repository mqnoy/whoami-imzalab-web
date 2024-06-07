"use client";

import { ChildrenProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition: React.FC<ChildrenProps> = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeOut" },
          }}
          className="h-screen w-screen fixed bg-white top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
