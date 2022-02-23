import { ComponentProps, FunctionComponent } from "react";
import { IconUser, Label, unsafeLocalizedString, IconProps } from "..";
import { avatarRecipe } from "./Avatar.css";
import { BentoSprinkles, Box } from "../internal";

type Props = {
  name?: string;
  color:
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
};

type AvatarConfig = {
  width: BentoSprinkles["width"];
  height: BentoSprinkles["height"];
  radius: BentoSprinkles["borderRadius"];
  labelSize: ComponentProps<typeof Label>["size"];
  icon: FunctionComponent<IconProps>;
};

export function createAvatar(
  config: AvatarConfig = {
    width: 40,
    height: 40,
    radius: "circled",
    labelSize: "large",
    icon: IconUser,
  }
) {
  return function Avatar({ color, name }: Props) {
    const initial = name?.trim()[0];

    return (
      <Box display="flex">
        <Box
          className={avatarRecipe({
            color,
          })}
          width={config.width}
          height={config.height}
          borderRadius={config.radius}
        >
          {initial ? (
            <Label size={config.labelSize}>{unsafeLocalizedString(initial)}</Label>
          ) : (
            <config.icon size={16} />
          )}
        </Box>
      </Box>
    );
  };
}