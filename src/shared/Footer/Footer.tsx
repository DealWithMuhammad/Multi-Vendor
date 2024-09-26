import React from "react";

import FooterMain from "./FooterMain";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900">
      <div className="container pt-16">
        <FooterMain />
      </div>
    </footer>
  );
};

export default Footer;
