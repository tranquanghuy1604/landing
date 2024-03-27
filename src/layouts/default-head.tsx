import Head from "next/head";
import React from "react";

export default function DefaultHead() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src *;
                        img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                        style-src  'self' 'unsafe-inline' *"
        ></meta>
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <link rel="icon" type="image/png" href={"/homepage/study-img.png"} />
        <meta property="og:image" content={`/homepage/study-img.png`} />
        <meta name="twitter:image" content={`/homepage/study-img.png`} />
        <meta property="telegram:image" content={`/homepage/study-img.png`} />
      </Head>
    </div>
  );
}
