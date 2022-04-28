import {
  TextField,
  SelectFieldProps,
  SliderFieldProps,
  NumberField,
  RadioGroupField,
  SelectField,
  SliderField,
  Omit,
} from "..";
import * as React from "react";
import { ComponentProps, useState } from "react";
import { formatMessage } from "../formatMessage";

export const ExampleTextField = (
  props: Omit<
    ComponentProps<typeof TextField>,
    "placeholder" | "value" | "onChange" | "name" | "onBlur"
  >
) => {
  const [value, onChange] = useState("");
  return (
    <TextField
      placeholder={formatMessage("Insert a value")}
      value={value}
      onChange={onChange}
      onBlur={() => {}}
      name="textField"
      hint={formatMessage("Some useful advice on how to fill this field")}
      {...props}
    />
  );
};

export const ExampleNumberField = (
  props: Omit<
    ComponentProps<typeof NumberField>,
    "placeholder" | "value" | "onChange" | "name" | "onBlur"
  >
) => {
  const [value, onChange] = useState<number | undefined>(undefined);
  return (
    <NumberField
      placeholder={formatMessage("Insert a value")}
      value={value}
      onChange={onChange}
      onBlur={() => {}}
      name="numberField"
      {...props}
    />
  );
};

export const ExampleSelectField = <A extends {}>(
  props: Omit<
    SelectFieldProps<A, false>,
    "placeholder" | "value" | "onChange" | "name" | "onBlur" | "menuSize"
  >
) => {
  const [value, onChange] = useState<A | undefined>(undefined);
  return (
    <SelectField
      placeholder={formatMessage("Select a value")}
      value={value}
      onChange={onChange}
      name="selectField"
      onBlur={() => {}}
      {...props}
    />
  );
};

export const ExampleRadioGroupField = (
  props: Omit<ComponentProps<typeof RadioGroupField>, "value" | "onChange" | "name" | "onBlur">
) => {
  const [value, onChange] = useState<string | number | boolean | undefined>(undefined);
  return (
    <RadioGroupField
      value={value}
      onChange={onChange}
      name="radioGroupField"
      onBlur={() => {}}
      {...props}
    />
  );
};

export const ExampleSliderField = (
  props: Omit<
    SliderFieldProps & { type: "single"; kind: "decimal" },
    "value" | "onChange" | "type" | "kind" | "name" | "onBlur"
  > & {
    initialValue?: number;
  }
) => {
  const [value, onChange] = useState(props.initialValue ?? 1);
  return (
    <SliderField
      minValue={props.minValue}
      maxValue={props.maxValue}
      label={props.label}
      name="slider"
      onBlur={() => {}}
      type="single"
      kind="decimal"
      value={value}
      onChange={onChange}
    />
  );
};
