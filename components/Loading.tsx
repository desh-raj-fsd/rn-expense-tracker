import { colors } from "@/constants/theme";
import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

/**
 * Loading
 *
 * Purpose:
 * - Full-screen (flex: 1) centered loading spinner for pending states.
 * - Provides consistent defaults for size and brand color.
 *
 * Behavior:
 * - Renders a `View` that fills available space and centers content.
 * - Displays a React Native `ActivityIndicator`.
 * - Uses defaults: `size = "large"`, `color = colors.primary`.
 * - Only `size` and `color` are consumed from `ActivityIndicatorProps` in this implementation.
 *
 * Props (ActivityIndicatorProps subset used):
 * - size (optional): Spinner size (number | 'small' | 'large'). Defaults to 'large'.
 * - color (optional): Spinner color. Defaults to theme `colors.primary`.
 *
 * Usage:
 *   // Full-screen loading inside a screen
 *   <Loading />
 *
 *   // Inline loading (wrap to avoid stretching the entire parent)
 *   <View style={{ height: 120 }}>
 *     <Loading />
 *   </View>
 *
 * Notes:
 * - This wrapper centers the spinner via `justifyContent` and `alignItems`.
 * - Other `ActivityIndicator` props (e.g., `animating`, `testID`) are not forwarded here.
 *   If needed, extend the component to accept `...rest` and pass to `ActivityIndicator`.
 */
const Loading = ({
  size = "large",
  color = colors.primary,
}: ActivityIndicatorProps) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
