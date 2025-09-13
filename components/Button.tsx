import { colors, radius } from "@/constants/theme";
import { CustomButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Loading from "./Loading";

/**
 * Button
 *
 * Purpose:
 * - Themed, reusable button with built-in loading state.
 * - Ensures consistent sizing, radius, and primary color across the app.
 *
 * Behavior:
 * - When `loading` is true, renders a non-pressable container showing a centered spinner
 *   (using the `Loading` component) with a transparent background.
 * - When `loading` is false, renders a `TouchableOpacity` using common button styles and
 *   passes `onPress` through.
 * - Always merges incoming `style` after base styles so callers can extend/override.
 *
 * Props (CustomButtonProps):
 * - style (optional ViewStyle | StyleProp<ViewStyle>): Additional button container styles.
 * - onPress (required function): Handler invoked on press when not loading.
 * - loading (optional boolean): If true, shows spinner and disables press; default false.
 * - children: Button content (e.g., text node or custom content).
 *
 * Styles:
 * - Background: `colors.primary`.
 * - Radius: `radius._17` with `borderCurve: 'continuous'`.
 * - Height: `verticalScale(52)`; content centered with `justifyContent`/`alignItems`.
 *
 * Usage:
 *   <Button onPress={handleSubmit}>
 *     <Content fontWeight="600" color="#fff">Continue</Content>
 *   </Button>
 *
 *   <Button loading style={{ marginTop: 12 }} />
 *
 * Notes:
 * - Consider adding `accessibilityRole="button"` and `disabled` support for better UX.
 * - If the spinner size appears large for the button height, adjust the `Loading` component
 *   to accept and use a smaller `size` for inline usage.
 */
const Button = ({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: "continuous",
    height: verticalScale(52),
    justifyContent: "center",
    alignItems: "center",
  },
});
