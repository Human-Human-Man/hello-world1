import React, { ReactNode } from "react";
import Text from "../components/text";
import { style } from "typestyle";
import { A } from "hookrouter";
import Button from "../components/button";

export default function Chat(): ReactNode {
    return (
      <>
        <Text size={3} weight="bold">
          Calendar
        </Text>
        <br/>
        <br/>
        <br/>
        <Text>
          You can check out what the date is today.
          <br />
          You can also find national holidays.
          <br />
          I'm trying to make it so that you can save deadlines for projects.
        </Text>
        <br/>
        <br/>
        <iframe 
        //help me reeeee
        className={style({ border: "solid 1px", width: "800px", height: "600px",  right: 0})}
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Australia%2FPerth&amp;src=OHFzOW02dXVuYTl2bDdqcmczMWNuMWR2cGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uYXVzdHJhbGlhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;color=%230B8043&amp;title=WA%20Calendar&amp;mode=MONTH"
        ></iframe>
        <br/>
        <br/>
        <br/>
        <A href="/">
        <Button>Become a better Coder you loser.</Button>
      </A>
      </>
    )
  }

