import { createComponentStories, formatMessage, textArgType } from "../util";
import { Button } from "../";

const { defaultExport, createStory } = createComponentStories({
  component: Button,
  args: {
    label: formatMessage("Button"),
  },
  argTypes: {
    label: textArgType,
  },
});

export default defaultExport;

export const PrimarySolid = createStory({
  kind: "solid",
  hierarchy: "primary",
});

export const SecondarySolid = createStory({
  kind: "solid",
  hierarchy: "secondary",
});

export const DangerSolid = createStory({
  kind: "solid",
  hierarchy: "danger",
});

export const PrimaryTransparent = createStory({
  kind: "transparent",
  hierarchy: "primary",
});

export const SecondaryTransparent = createStory({
  kind: "transparent",
  hierarchy: "secondary",
});

export const DangerTransparent = createStory({
  kind: "transparent",
  hierarchy: "danger",
});

export const SolidDisabled = createStory({
  kind: "solid",
  hierarchy: "primary",
  isDisabled: true,
});

export const TransparentDisabled = createStory({
  kind: "transparent",
  hierarchy: "primary",
  isDisabled: true,
});

export const PrimarySmall = createStory({
  kind: "solid",
  hierarchy: "primary",
  size: "small",
});

export const PrimaryLarge = createStory({
  kind: "solid",
  hierarchy: "primary",
  size: "large",
});
