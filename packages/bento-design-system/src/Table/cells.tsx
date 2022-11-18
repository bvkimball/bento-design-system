import { ComponentProps, FunctionComponent } from "react";
import { CellProps } from "react-table";
import {
  LocalizedString,
  Body,
  ButtonProps,
  ChipProps,
  IconProps,
  Label,
  Link,
  Children,
  Inline,
  Inset,
  Box,
  Button,
  Tooltip,
  Chip,
  IconButton,
  IconButtonProps,
  ButtonLink,
  ButtonLinkProps,
} from "..";
import { useBentoConfig } from "../BentoConfigContext";

export function ButtonCell({
  value: buttonProps,
  column: { align },
}: CellProps<{}, Omit<ButtonProps, "size">>) {
  return (
    <Inline space={0} align={align} alignY="center">
      <Button {...buttonProps} size="medium" />
    </Inline>
  );
}

export function ButtonLinkCell({
  value: buttonProps,
  column: { align },
}: CellProps<{}, Omit<ButtonLinkProps, "size">>) {
  return (
    <Inline space={0} align={align}>
      <ButtonLink {...buttonProps} size="medium" />
    </Inline>
  );
}

export function TextCell({ value, column: { align } }: CellProps<{}, LocalizedString>) {
  return (
    <Box padding={16} textAlign={align}>
      <Body size="medium">{value}</Body>
    </Box>
  );
}

export function TextWithIconCell({
  value: { icon, iconPosition, text, tooltipContent },
  column: { align },
}: CellProps<
  {},
  {
    icon: FunctionComponent<IconProps> | null;
    iconPosition: "left" | "right";
    text: LocalizedString;
    tooltipContent?: Children;
  }
>) {
  const config = useBentoConfig().table;
  const icon_ = icon && icon({ size: 12 });

  return (
    <Inset space={16}>
      <Inline space={8} alignY="center" align={align} reverse={iconPosition === "right"}>
        {tooltipContent ? (
          <Tooltip
            content={tooltipContent}
            placement={config.cellTooltipPlacement}
            trigger={(ref, triggerProps) => (
              <Box ref={ref} {...triggerProps}>
                {icon_}
              </Box>
            )}
          />
        ) : (
          icon_
        )}
        <Body size="medium">{text}</Body>
      </Inline>
    </Inset>
  );
}

export function ChipCell({ value: chipProps, column: { align } }: CellProps<{}, ChipProps>) {
  return (
    <Inset space={16}>
      <Inline space={0} align={align} alignY="center">
        <Chip {...chipProps} />
      </Inline>
    </Inset>
  );
}

export function LabelCell({ value, column: { align } }: CellProps<{}, LocalizedString>) {
  return (
    <Box padding={16} textAlign={align}>
      <Label size="large">{value}</Label>
    </Box>
  );
}

export function LinkCell({ value, column: { align } }: CellProps<{}, ComponentProps<typeof Link>>) {
  return (
    <Box padding={16} textAlign={align}>
      <Body size="medium">
        <Link {...value} />
      </Body>
    </Box>
  );
}

export function IconCell({
  value,
  column: { align },
}: CellProps<{}, { icon: (props: IconProps) => JSX.Element; label: LocalizedString }>) {
  return (
    <Box padding={16} textAlign={align} aria-label={value.label}>
      {value.icon({ size: 16, color: "default" })}
    </Box>
  );
}

export function IconButtonCell({
  value: iconButtonProps,
  column: { align },
}: CellProps<{}, Omit<IconButtonProps, "size" | "kind" | "hierarchy">>) {
  return (
    <Inline space={0} align={align} alignY="center">
      <IconButton kind="transparent" hierarchy="primary" {...iconButtonProps} size={16} />
    </Inline>
  );
}
