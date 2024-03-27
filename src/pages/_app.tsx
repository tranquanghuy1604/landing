import "@/styles/globals.css";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NEXT_SEO_DEFAULT } from "../../next-seo.config";
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} />
      getLayout(
      <Component {...pageProps} />)
    </>
  );
}
