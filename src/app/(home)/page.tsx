import React from "react";

import BenefitsSection from "@/components/home/sections/Benefits";
import BestSellersSection from "@/components/home/sections/BestSellers";
import HeaderSection from "@/components/home/sections/Header";
import NewArrivals from "@/components/home/sections/NewArrival";
import NewArrivals2 from "@/components/home/sections/NewArrival2";
import PopluarCategoriesSection from "@/components/home/sections/PopluarCategories";
import RecommendedSection from "@/components/home/sections/Recommend";

const page = () => {
  return (
    <main>
      <HeaderSection />
      <BestSellersSection />

      <BenefitsSection />
      <NewArrivals2 />
      <RecommendedSection />
      <NewArrivals />
      <PopluarCategoriesSection />
    </main>
  );
};

export default page;
