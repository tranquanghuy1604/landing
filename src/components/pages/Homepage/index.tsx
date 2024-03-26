import React from "react";
import Introduce from "./Introduce";
import LightFastPowerful from "./LightFastPowerful";
import LightsTwo from "./LightfastTwo";
import LightsThree from "./LightsThree";
import LightsFour from "./LightsFour";
import PriceToSuit from "./PriceToSuit";

export default function HomePage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-4">
        <Introduce />
        <LightFastPowerful />
        <LightsTwo />
        <LightsThree />
        <LightsFour />
      </div>
      <PriceToSuit />
    </>
  );
}
