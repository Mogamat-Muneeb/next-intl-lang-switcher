import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations("About");
  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
};

export default About;
