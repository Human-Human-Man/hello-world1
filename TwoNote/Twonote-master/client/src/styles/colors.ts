import { ColorHelper, color, hsl } from "csx";

import { types } from "typestyle";

export function textColor(col: ColorHelper): ColorHelper {
  return col.lightness() > 0.5 ? color("#000000") : color("#FFFFFF");
}

export interface Palette {
  color: ColorHelper[];
  text: ColorHelper[];
}

function getColorPalette({
  hue,
  saturation,
  lightness,
}: {
  hue?: number;
  saturation?: number;
  lightness?: number;
}): Palette {
  const colors = new Array(11)
    .fill(undefined)
    .map((_, i) =>
      hsl(
        hue === undefined ? i / 10 : hue,
        saturation === undefined ? i / 10 : saturation,
        lightness === undefined ? i / 10 : lightness
      )
    );
  return {
    color: colors,
    text: colors.map(textColor),
  };
}

export function style(
  { color, text }: Palette,
  index: number,
  coloredText = false
): types.CSSProperties {
  return {
    backgroundColor: (coloredText ? text : color)[index].toString(),
    color: (coloredText ? color : text)[index].toString(),
  };
}

export const grey = getColorPalette({ saturation: 0 });
export const accent = getColorPalette({ hue: 270 });
export const error = getColorPalette({ hue: 0 });
