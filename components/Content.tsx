import { colors } from "@/constants/theme";
import { ContentProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

/**
 * Content
 *
 * Purpose:
 * - Reusable text component for body/content copy with sensible defaults.
 * - Provides responsive font sizing via `verticalScale` and theme-aware color.
 *
 * Behavior:
 * - Font size: uses `verticalScale(size)` when `size` is provided, otherwise defaults to `verticalScale(18)`.
 * - Applies `color` (default `colors.text`) and `fontWeight` (default "400").
 * - Merges `style` after the base computed style so callers can extend/override.
 * - Spreads `textProps` onto the underlying React Native `Text` component.
 *
 * Props (ContentProps):
 * - size (optional number): Base font size in dp before scaling.
 * - color (optional string): Text color, defaults to theme `colors.text`.
 * - fontWeight (optional TextStyle["fontWeight"]): Weight string/number, defaults to "400".
 * - style (optional StyleProp<TextStyle>): Additional styles merged last.
 * - textProps (optional TextProps): Any Text props to pass through (e.g., `numberOfLines`).
 * - children: The text or nodes to render inside.
 *
 * Usage:
 *   <Content size={16} fontWeight="600">Welcome back</Content>
 *   <Content style={{ textAlign: 'center' }} textProps={{ numberOfLines: 2 }}>
 *     Multi-line content
 *   </Content>
 *
 * Notes:
 * - `verticalScale` adjusts size relative to screen height for better readability across devices.
 * - Prefer this component over raw `Text` for consistent typography across screens.
 */
const Content = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: ContentProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Content;

const styles = StyleSheet.create({});
