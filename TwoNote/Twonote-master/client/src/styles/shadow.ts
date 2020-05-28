import { ColorHelper, color } from "csx";

import { types } from "typestyle";

export function shadow(
  depth: 0 | 1 | 2 | 3 | 4 | 5,
  col: ColorHelper = color("#000000")
): types.NestedCSSProperties {
  if (depth === 0) {
    return { boxShadow: "none" };
  }
  depth--;
  const top = {
    offset: [1.5, 3, 10, 14, 19],
    blur: [6, 12, 40, 56, 76],
    opacity: [0.12, 0.16, 0.19, 0.25, 0.3],
  };
  const bottom = {
    offset: [1.5, 3, 6, 10, 15],
    blur: [4, 12, 12, 20, 24],
    opacity: [0.24, 0.23, 0.23, 0.22, 0.22],
  };
  return {
    boxShadow: `0 ${top.offset[depth]}px ${top.blur[depth]}px ${col
      .fade(top.opacity[depth])
      .toString()}, 0 ${bottom.offset[depth]}px ${
      bottom.blur[depth]
    }px ${col.fade(bottom.opacity[depth]).toString()}`,
  };
}
