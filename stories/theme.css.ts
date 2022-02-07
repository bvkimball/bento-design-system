import { createGlobalTheme, createTheme } from "@vanilla-extract/css";
import { vars as bentoVars } from "../src/vars.css";

const remBaseSize = 16;
const pixelToRem = (px: number) => `${px / remBaseSize}rem`;

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary30: "#FF4E62",
  secondary30: "#FFC63E",
  tertiary30: "#7BE6E6",
  neutral01: "#F6F8FB",
  neutral05: "#ECEFF4",
  neutral20: "#CBD4E1",
  neutral40: "#9AA8BC",
  neutral50: "#728197",
  neutral60: "#525E6F",
  neutral70: "#3B4554",
  neutral80: "#27313F",
  neutral90: "#1A212B",
  informative05: "#D8E8FF",
  informative40: "#2D7AE5",
  informative50: "#105FCE",
  informative60: "#004AB1",
  informative70: "#003B8D",
  positive05: "#DAFCE6",
  positive50: "#21C357",
  positive60: "#049B22",
  positive70: "#078631",
  warning05: "#FFF2D2",
  warning40: "#F2A60D",
  warning50: "#D66F00",
  warning60: "#BA5900",
  warning70: "#946300",
  negative05: "#FFD4D8",
  negative40: "#CE0718",
  negative50: "#CE0718",
  negative60: "#B1000F",
  negative70: "#8D000C",
  interactive70: "#4D4D4D",
  interactive80: "#333333",
};

const commonTheme = {
  fontFamily: {
    default: "Arial",
  },
  fontSize: {
    bodySmall: pixelToRem(12),
    bodyMedium: pixelToRem(14),
    bodyLarge: pixelToRem(16),
    headlineSmall: pixelToRem(24),
    headlineMedium: pixelToRem(28),
    headlineLarge: pixelToRem(32),
    displaySmall: pixelToRem(36),
    displayMedium: pixelToRem(45),
    displayLarge: pixelToRem(57),
    labelSmall: pixelToRem(11),
    labelMedium: pixelToRem(12),
    labelLarge: pixelToRem(14),
    titleSmall: pixelToRem(14),
    titleMedium: pixelToRem(16),
    titleLarge: pixelToRem(22),
  },
  lineHeight: {
    bodySmall: pixelToRem(16),
    bodyMedium: pixelToRem(18),
    bodyLarge: pixelToRem(20),
    headlineSmall: pixelToRem(30),
    headlineMedium: pixelToRem(36),
    headlineLarge: pixelToRem(40),
    displaySmall: pixelToRem(46),
    displayMedium: pixelToRem(56),
    displayLarge: pixelToRem(72),
    labelSmall: pixelToRem(14),
    labelMedium: pixelToRem(16),
    labelLarge: pixelToRem(18),
    titleSmall: pixelToRem(18),
    titleMedium: pixelToRem(20),
    titleLarge: pixelToRem(28),
  },
  fontWeight: {
    regular: "400",
    semibold: "600",
  },
  letterSpacing: {
    "1": "0.01em",
    "2": "0.02em",
  },
  space: {
    "0": "0",
    "4": "4px",
    "8": "8px",
    "16": "16px",
    "24": "24px",
    "32": "32px",
    "40": "40px",
    "80": "80px",
  },
  radius: {
    "4": "4px",
    "8": "8px",
    "16": "16px",
  },
};

export const lightTheme = createTheme(bentoVars, {
  ...commonTheme,
  brandColor: {
    brandPrimary: colors.primary30,
    brandSecondary: colors.secondary30,
    brandTertiary: colors.tertiary30,
  },
  backgroundColor: {
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.neutral01,
    backgroundInformative: colors.informative05,
    backgroundPositive: colors.positive05,
    backgroundWarning: colors.warning05,
    backgroundNegative: colors.negative05,
    backgroundLightOverlay: "rgba(255, 255, 255, 0.8)",
    backgroundDarkOverlay: "rgba(26, 33, 43, 0.6)",
  },
  foregroundColor: {
    foregroundPrimary: colors.neutral90,
    foregroundSecondary: colors.neutral60,
    foregroundInformative: colors.informative40,
    foregroundPositive: colors.positive60,
    foregroundWarning: colors.warning50,
    foregroundNegative: colors.negative40,
    foregroundDisabled: "rgba(26, 33, 43, 0.3)",
  },
  textColor: {
    textPrimary: colors.neutral90,
    textSecondary: colors.neutral60,
    textInformative: colors.informative50,
    textPositive: colors.positive70,
    textWarning: colors.warning60,
    textNegative: colors.negative60,
    textDisabled: "rgba(82, 94, 111, 0.3)",
  },
  interactiveBackgroundColor: {
    solidEnabledBackground: colors.black,
    solidHoverBackground: colors.interactive70,
    solidFocusBackground: colors.interactive70,
    solidActiveBackground: colors.black,
    solidDisabledBackground: "rgba(82, 94, 111, 0.1)",
    transparentEnabledBackground: "transparent",
    transparentHoverBackground: "rgba(26, 33, 43, 0.1)",
    transparentFocusBackground: "rgba(26, 33, 43, 0.1)",
    transparentActiveBackground: "rgba(26, 33, 43, 0.2)",
    transparentDisabledBackground: "transparent",
    dangerEnabledBackground: colors.negative40,
    dangerHoverBackground: colors.negative60,
    dangerFocusBackground: colors.negative60,
    dangerDisabledBackground: "rgba(82, 94, 111, 0.1)",
  },
  interactiveForegroundColor: {
    solidEnabledForeground: colors.white,
    solidHoverForeground: colors.white,
    solidFocusForeground: colors.white,
    solidActiveForeground: colors.black,
    solidDisabledForeground: "rgba(82, 94, 111, 0.3)",
    transparentEnabledForeground: colors.black,
    transparentHoverForeground: colors.black,
    transparentFocusForeground: colors.black,
    transparentActiveForeground: colors.black,
    transparentDisabledForeground: "rgba(82, 94, 111, 0.3)",
    dangerEnabledForeground: colors.white,
    dangerHoverForeground: colors.white,
    dangerFocusForeground: colors.white,
    dangerDisabledForeground: "rgba(82, 94, 111, 0.3)",
  },
  outlineColor: {
    outlineInput: colors.neutral50,
    outlineInteractive: colors.black,
    outlineDecorative: colors.neutral20,
    outlineNegative: colors.negative40,
    outlineDisabled: colors.neutral60,
  },
  boxShadow: {
    outlineInput: `inset 0px 0px 0px 1px ${colors.neutral50}`,
    outlineInteractive: `inset 0px 0px 0px 1px ${colors.black}`,
    outlineInteractiveStrong: `inset 0px 0px 0px 2px ${colors.black}`,
    outlineNegative: `inset 0px 0px 0px 1px ${colors.negative40}`,
    outlineNegativeStrong: `inset 0px 0px 0px 2px ${colors.negative40}`,
    outlineDisabled: `inset 0px 0px 0px 1px rgba(82, 94, 111, 0.3);`,
    small: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    medium: "0px 8px 16px rgba(0, 0, 0, 0.16)",
    large: "0px 16px 32px rgba(0, 0, 0, 0.16)",
  },
});

export const vars = createGlobalTheme(":root", {
  fontFamily: {
    customFontFamily: "sans-serif",
  },
  color: {
    customColor1: "#3C6FD6",
  },
  space: {
    "12": "12px",
  },
});
