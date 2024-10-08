import Link from "next/link";
import type { FC } from "react";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link className="flex cursor-pointer items-center gap-1" href="/">
      <span className={`${className} text-2xl font-bold`}>M-Vendor</span>
    </Link>
  );
};

export default Logo;
