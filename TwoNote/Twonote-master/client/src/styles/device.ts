import { media, types } from "typestyle";

const MOBILE_SIZE = 768;

export function mobile(
  styles: types.NestedCSSProperties
): types.NestedCSSProperties {
  return media({ minWidth: 0, maxWidth: MOBILE_SIZE }, styles);
}

export function desktop(
  styles: types.NestedCSSProperties
): types.NestedCSSProperties {
  return media({ minWidth: MOBILE_SIZE + 1 }, styles);
}
