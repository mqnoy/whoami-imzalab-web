"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] mix-blend-lighten "
        >
          <Image
            src="/assets/photo.jpeg"
            priority
            quality={100}
            fill
            alt="rifky azmi photo"
            className="rounded-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
