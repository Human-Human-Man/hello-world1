import React, { ReactNode } from "react";
import Text from "../components/text";
import Button from "../components/button";
import { A } from "hookrouter";

export default function sChat(): ReactNode {
  return (
    <>
      <Text>This is the notes section</Text>
      <br />
      <A href="/">
        <Button>Go and Die. Become a better Coder you loser.</Button>
      </A>
    </>
  );
}
