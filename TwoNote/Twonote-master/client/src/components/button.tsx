import * as colors from "../styles/colors";


import React, { ReactNode } from "react";
import { classes, style } from "typestyle";

import { shadow } from "../styles/shadow";

export default function Button({
  children,
  circle,
  className,
  color = colors.accent,
  transparent = false,
  ...rest
}: {
  children: ReactNode;
  circle?: boolean;
  className?: string;
  color?: colors.Palette;
  transparent?: boolean;
} & Omit<JSX.IntrinsicElements["button"], "color">): JSX.Element {
  return (
    <button
      {...rest}
      className={classes(
        className,
        style(
          circle && { borderRadius: "100%" },
          colors.style(color, 5),
          transparent ? { backgroundColor: "transparent" } : shadow(3),
          {
            $nest: {
              "&&:hover": colors.style(color, 6)
            },
            border: "none",
            transition: "background-color 200ms, color 200ms"
          }
        )
      )}
    >
      {children}
    </button>
  );
}
