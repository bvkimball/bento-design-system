import { ComponentProps, FunctionComponent } from "react";
import { IconProps } from "../Icons/IconProps";
import { Label, LocalizedString, BoxProps, BoxType } from "..";
import { IconClose } from "../Icons/IconClose";
import { Column, Columns, BentoSprinkles, bentoSprinkles } from "../internal";
import { chip } from "./Chip.css";
import { useDefaultMessages } from "../util/useDefaultMessages";
import { IconButtonProps } from "../IconButton/createIconButton";

type ChipConfig<AtomsFn extends typeof bentoSprinkles, CustomColor extends string> = {
  paddingX: BentoSprinkles["paddingX"];
  paddingY: BentoSprinkles["paddingY"];
  labelSize: ComponentProps<typeof Label>["size"];
  closeIcon: FunctionComponent<IconProps>;
  closeIconSize: IconProps["size"];
  internalSpacing: BentoSprinkles["gap"];
  customColors: {
    [k in CustomColor]: BoxProps<AtomsFn>["background"];
  };
};
export const defaultChipConfig: ChipConfig<typeof bentoSprinkles, string> = {
  paddingX: 8,
  paddingY: 4,
  labelSize: "small",
  closeIcon: IconClose,
  closeIconSize: 8,
  internalSpacing: 8,
  customColors: {},
};

type DismissProps =
  | {
      dismissButtonLabel?: LocalizedString;
      onDismiss: () => void;
    }
  | {
      dismissButtonLabel?: never;
      onDismiss?: never;
    };

type DefaultColor =
  | "grey"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "jade"
  | "blue"
  | "indigo"
  | "violet"
  | "pink";

type Props<CustomColor extends string> = {
  label: LocalizedString;
  color: DefaultColor | CustomColor;
} & DismissProps;

const defaultColorsMapping: Record<DefaultColor, BentoSprinkles["background"]> = {
  grey: "softGrey",
  red: "softRed",
  orange: "softOrange",
  yellow: "softYellow",
  green: "softGreen",
  jade: "softJade",
  blue: "softBlue",
  indigo: "softIndigo",
  violet: "softViolet",
  pink: "softPink",
};

export function createChip<AtomsFn extends typeof bentoSprinkles, CustomColors extends string>(
  config: ChipConfig<AtomsFn, CustomColors>,
  {
    Box,
    IconButton,
  }: {
    Box: BoxType<AtomsFn>;
    IconButton: FunctionComponent<IconButtonProps>;
  }
) {
  const colorsMapping = { ...defaultColorsMapping, ...config.customColors };

  return function Chip({ color, label, ...dismissProps }: Props<CustomColors>) {
    const { defaultMessages } = useDefaultMessages();

    return (
      <Box display="flex">
        <Box
          paddingX={config.paddingX}
          paddingY={config.paddingY}
          className={chip}
          background={colorsMapping[color]}
        >
          <Columns space={config.internalSpacing} align="center" alignY="center">
            <Label size={config.labelSize}>{label}</Label>
            {dismissProps.onDismiss && (
              <Column width="content">
                <IconButton
                  icon={config.closeIcon}
                  label={dismissProps.dismissButtonLabel ?? defaultMessages.Chip.dismissButtonLabel}
                  onPress={dismissProps.onDismiss}
                  size={config.closeIconSize}
                  kind="transparent"
                  hierarchy="secondary"
                />
              </Column>
            )}
          </Columns>
        </Box>
      </Box>
    );
  };
}

export type { Props as ChipProps };
