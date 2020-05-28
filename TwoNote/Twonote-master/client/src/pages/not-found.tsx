import React from "react";
import Text from "../components/text";
import { style } from "typestyle";

export default function NotFound(): JSX.Element {
  return (
    <div>
      <img
        className={style({
          marginLeft: "auto",
          marginRight: "none",
          display: "block",
          paddingTop: "25px",
        })}
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.globalwealthprotection.com%2Fwp-content%2Fuploads%2F2013%2F10%2FObamacare-HTTP-Error-404.jpg&f=1&nofb=1"
      />
      <div className={style({ position: "fixed", left: 100, top: 10 })}>
        <Text>
          This page {"doesn't"} exist you dimwit. <br />
          In other words, this is a<br />
        </Text>
        <Text size={5}>451 error</Text>
      </div>
    </div>
  );
}
