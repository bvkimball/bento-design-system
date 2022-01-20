import { ComponentProps, ElementType, HTMLAttributes, LabelHTMLAttributes } from "react";
import { Body } from "../Typography/Body/Body";
import { Label } from "../Typography/Label/Label";
import { Stack, Box, bentoSprinkles } from "../internal";
import { Children } from "../util/Children";
import { FieldProps } from "./FieldProps";
import { BoxProps } from "src";

type Props = Pick<FieldProps<never>, "issues" | "disabled" | "assistiveText" | "hint"> & {
  /** The field label rendered on screen. Can be omitted in case of fields that have a custom label, such as CheckboxField  */
  label?: FieldProps<never>["label"];
  /** The dom element used to render the label. Defaults to <label>, but can be customized for fields that are group of inputs, like RadioGroup.
   *  @default "label"
   */
  labelElement?: ElementType<any>;
  /** Props that gets spread on the label element, usually coming from a react-aria utility */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  /** Props that gets spread on the assistiveText , usually coming from a react-aria utility (note: react-aria usually calls them descriptionProps) */
  assistiveTextProps: HTMLAttributes<HTMLElement>;
  /** Props that gets spread on the errorMessage element , usually coming from a react-aria utility */
  errorMessageProps: HTMLAttributes<HTMLElement>;
  /** The field element */
  children: Children;
  leftSpace: BoxProps<typeof bentoSprinkles>["paddingLeft"];
};

export type FieldType = React.FunctionComponent<Props>;
type FieldConfig = {
  labelSize: ComponentProps<typeof Label>["size"];
  assistiveTextSize: ComponentProps<typeof Body>["size"];
};

/**
 * A utility for rendering a form field with a label, a description and error message, alongside their accessibility props.
 * This is meant as an internal design system utility for implementing form fields.
 */
export function createField({ labelSize = "small", assistiveTextSize = "small" }: FieldConfig) {
  return function Field({
    label,
    assistiveText,
    issues,
    labelProps,
    assistiveTextProps,
    errorMessageProps,
    children,
    disabled,
    labelElement = "label",
    leftSpace,
  }: Props) {
    return (
      <Box disabled={disabled} cursor={{ disabled: "notAllowed" }}>
        <Stack space="4">
          {label && (
            <Label
              as={labelElement}
              {...labelProps}
              size={labelSize}
              color={disabled ? "disabled" : "secondary"}
            >
              {label}
            </Label>
          )}
          {children}
          {assistiveText && !issues && (
            <Box paddingLeft={leftSpace}>
              <Body
                {...assistiveTextProps}
                size={assistiveTextSize}
                color={disabled ? "disabled" : "secondary"}
              >
                {assistiveText}
              </Body>
            </Box>
          )}
          {issues && (
            <Box paddingLeft={leftSpace}>
              <Stack space="4">
                {issues.map((errorMessage, index) => (
                  <Body
                    key={index}
                    {...errorMessageProps}
                    size={assistiveTextSize}
                    color="negative"
                  >
                    {errorMessage}
                  </Body>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>
    );
  };
}
