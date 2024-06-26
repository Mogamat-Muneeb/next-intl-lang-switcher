import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';

const locales: string[] = ['', 'en', 'nl'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  console.log(locale)
  return {
    messages: (await import(`./content/${locale}.json`)).default
  };
});