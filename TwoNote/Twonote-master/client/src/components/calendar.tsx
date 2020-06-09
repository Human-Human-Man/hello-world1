import React from "react";
import { classes, style } from "typestyle";
import Button from "./button";
import { A } from "hookrouter";

export default function Calendar({
    return (className,
    }: {
      className?: string;
    }): JSX.Element {
      return (
        <div
          className={classes(
            className,
            style(
              {
                top: 0,
                left: -90,
                overflowX: "hidden",
                height: "500%",
                width: "95px",
                position: "fixed",
                backgroundColor: "#111",
                zIndex: 1,
                paddingLeft: "10px",
              },
              {
                $nest: {
                  "&&:hover": { left:0.1 },
                },
                transition: "left 400ms",
              }
            )
          )}
        >
      );
    })
})
