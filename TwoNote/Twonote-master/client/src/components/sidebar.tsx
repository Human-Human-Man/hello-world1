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
            height: "500%",
            width: "100px",
            position: "fixed",
            backgroundColor: "#111",
            zIndex: 1,
            paddingLeft: "1px",
          },
          {
            $nest: {
              "&&:hover": { left:0.2 },
            },
            transition: "left 400ms",
          }
        )
      )}
    >
      <A href="/">
        <Button className={style({width: "95px", height: "50px"})}>Home</Button>
      </A>
      <br />
      <A href="/notes">
        <Button className={style({width: "95px", height: "50px"})}>Notes</Button>
      </A>
      <br />
      <A href="/chat">
        <Button className={style({width: "95px", height: "50px"})}>Chat</Button>
      </A>

      <A href="/homework">
        <Button className={style({width: "95px", height: "50px"})}>Homework</Button>
      </A>

      <A href="/calendar">
        <Button className={style({width: "95px", height: "50px"})}>Calendar</Button>
      </A>
    </div>
  );
}
