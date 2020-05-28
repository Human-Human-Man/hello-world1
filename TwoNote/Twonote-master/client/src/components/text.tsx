import React, { ReactNode } from "react";
import { classes, style } from "typestyle";

import { em } from "csx";
import { font } from "../styles/font";

export default function Text({
  children,
  className,
  italic = false,
  size = 1,
  weight = "normal",
}: {
  children: ReactNode;
  className?: string;
  italic?: boolean;
  size?: number;
  weight?: "normal" | "bold" | number;
}): JSX.Element {
  return (
    <span
      className={classes(
        className,
        style(
          {
            fontSize: em(size),
            fontStyle: italic ? "italic" : "normal",
            fontWeight: weight,
          },
          font
        )
      )}
    >
      {children}
    </span>
  );
}
