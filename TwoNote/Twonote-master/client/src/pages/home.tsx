import React, { ReactNode } from "react";
import Text from "../components/text";
import { style } from "typestyle";

export default function Home(): ReactNode {
  return (
    <>
      <Text size={2} weight="bold">
        TwoNote
      </Text>
      <br />
      <img
        // this was almost certainly a mistake
        className={style({ position: "fixed", right: 0 })}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.shTp6YyrNCWXT1SCI6sXqwHaKF%26pid%3DApi&f=1"
      ></img>
      <Text>
        Welcome the the epic TwoNote Home PAge.
        <br />
        In case {"you're"} confused, TwoNote is my attempt to one-up OneNote:
        1+1 = 2.
        <br />
        If {"you're"} confused about why, I {"don't"} fully have an answer.
        <br />
        Regardless, mouse over to the left to select which page you want to use,
        and have fun!
        <br />I have zero answers for anyone as to why {"I'm"} doing this.
      </Text>
    </>
  );
}
