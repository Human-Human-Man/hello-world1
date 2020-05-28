import React from "react";
import { classes, style } from "typestyle";
import Button from "./button";
import { A } from "hookrouter";

export default function Sidebar({
  className,
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
            height: "100%",
            width: "100px",
            position: "fixed",
            backgroundColor: "#111",
            zIndex: 1,
            paddingLeft: "20px",
          },
          {
            $nest: {
              "&&:hover": { left: 0 },
            },
            transition: "left 500ms",
          }
        )
      )}
    >
      <A href="/">
        <Button>Home</Button>
      </A>
      <A href="/notes">
        <Button>Notes</Button>
      </A>
      <A href="/chat">
        <Button>Chat</Button>
      </A>
      <A href="/calendar">
        <Button>Calendar</Button>
      </A>
    </div>
  );
}
