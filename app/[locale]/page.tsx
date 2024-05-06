import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p dangerouslySetInnerHTML={{ __html: t("description") }}></p>
    </div>
  );
}
