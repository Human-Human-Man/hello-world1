import React, { ReactNode } from "react";
import Text from "../components/text";
import Button from "../components/button";
import { A } from "hookrouter";

export default function Homework(): ReactNode {
  return (
    <>
      <Text>This is the notes section</Text>
      <br />
      <A href="/">
        <Button>Become a better Coder you loser.</Button>
      </A>
    </>
  );
}