"use client";
import React, { useState } from "react";

import calsses from "./CircularNavigation.module.css";

function CircularNavigation({ buttons }: any) {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  return (
    <div className={`${calsses.menu} ${isActiveToggle ? calsses.active : ""}`}>
      <div
        className={calsses.toggle}
        onClick={() => setIsActiveToggle(!isActiveToggle)}
      >
        +
      </div>
      {buttons.map((item: any, index: number) => {
        return (
          <div
            className={calsses.menu_item}
            style={{
              transform: isActiveToggle
                ? `rotate(calc(360deg / ${buttons.length} * ${index})`
                : "",
              transitionDelay: `calc(0.1s * ${index})`,
            }}
            key={index}
          >
            <div
              style={{
                transform: `rotate(calc(-360deg / ${buttons.length} * ${index})`,
              }}
              onClick={() => item.function()}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CircularNavigation;
