import { bentoSprinkles } from "../internal";
import { strictRecipe } from "../util/strictRecipe";

export const listItemRecipe = strictRecipe({
  variants: {
    interactive: {
      true: bentoSprinkles({
        cursor: { default: "pointer", disabled: "notAllowed" },
        background: {
          hover: "primaryTransparentHoverBackground",
          focus: "primaryTransparentFocusBackground",
        },
      }),
    },
  },
});
