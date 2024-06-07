"use client";

import { LINKS } from "@/app/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {LINKS.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
