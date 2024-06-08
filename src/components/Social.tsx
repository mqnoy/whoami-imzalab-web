import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export const SOCIALS = [
  { icon: <FaGithub />, path: "https://github.com/mqnoy" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rifkyazmi" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@imzalab" },
  { icon: <FaTwitter />, path: "https://x.com/imz_rifky" },
];

type SocialProps = {
  containerStyles?: string | undefined;
  iconStyles?: string | undefined;
};

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIALS.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
