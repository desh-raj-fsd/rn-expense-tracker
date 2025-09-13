import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const { height } = Dimensions.get("window");
/**
 * ScreenWrapper
 *
 * Purpose:
 * - Provides a full-screen container with a consistent top padding and a dark theme background.
 * - Centralizes StatusBar styling so icons/text are visible on dark backgrounds across platforms.
 *
 * Behavior:
 * - Computes `paddingTop` per platform to avoid content colliding with the status bar/notch:
 *   - iOS: 6% of the device height (approximate safe area spacing).
 *   - Android/others: fixed 50px fallback.
 * - Applies base styles: `flex: 1` and `backgroundColor` from the app theme (`colors.neutral900`).
 * - Renders a `StatusBar` with `barStyle="light-content"` for good contrast on dark backgrounds.
 * - Merges any `style` prop last so callers can extend/override container styles.
 *
 * Props (ScreenWrapperProps):
 * - `style` (optional): Additional View style(s) to merge with the base wrapper style.
 * - `children`: Screen content to render inside the wrapper.
 *
 * Usage:
 *   <ScreenWrapper style={{ paddingHorizontal: 16 }}>
 *     <YourContent />
 *   </ScreenWrapper>
 *
 * Notes:
 * - For precise safe area handling on all devices, consider `SafeAreaView` or a safe-area library.
 */
const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS == "ios" ? height * 0.06 : 50;
  return (
    <View
      style={[
        { paddingTop, flex: 1, backgroundColor: colors.neutral900 },
        style,
      ]}
    >
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
