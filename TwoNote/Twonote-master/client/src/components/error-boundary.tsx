import * as colors from "../styles/colors";

import React, { Component, ReactNode } from "react";

import Text from "./text";
import { style } from "typestyle";

type Props = {};
type State = { error: Error | null };
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error });
  }

  render(): ReactNode {
    if (this.state.error !== null) {
      return (
        <div>
          <Text size={2} className={style(colors.style(colors.error, 5, true))}>
            Jack you broke it
          </Text>
          <Text
            size={1.5}
            className={style(colors.style(colors.error, 5, true))}
          >
            Stupid dummy idiot
          </Text>
          <pre>{this.state.error.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
