import Image from "next/image";
import Link from "next/link";
import { pathOr } from "ramda";
import React from "react";

import LanguageLarge from "@/components/LanguageLarge";

import Subscribe from "./Subscribe";

const FooterBottom = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="flex flex-col flex-wrap gap-y-6 lg:flex-row lg:items-center lg:justify-between xl:flex-nowrap">
        <div className="flex w-full flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between xl:w-fit">
          <div className="">
            <LanguageLarge />
          </div>

          <div className="mt-4 lg:mt-0 lg:pl-9">
            <h4 className="text-sm dark:text-neutral-300">Follow Us</h4>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-2/5">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
