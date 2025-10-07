import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { Easing, FadeIn, FadeInDown } from "react-native-reanimated";
import Content from "../../components/Content";

const HAS_ANIMATED_WELCOME = "__HAS_ANIMATED_WELCOME__";

const welcome = () => {
  const router = useRouter();
  // Guard to prevent re-running entering animations on Fast Refresh and Strict Mode re-mounts
  const hasAnimatedGlobal = (globalThis as any)[HAS_ANIMATED_WELCOME] === true;
  const [shouldAnimate] = React.useState(!hasAnimatedGlobal);
  React.useEffect(() => {
    if (!hasAnimatedGlobal) {
      (globalThis as any)[HAS_ANIMATED_WELCOME] = true;
    }
  }, [hasAnimatedGlobal]);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login button & image*/}
        <View>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.loginButton}
          >
            <Content fontWeight={"500"}>Sign In</Content>
          </TouchableOpacity>
          <Animated.Image
            entering={FadeIn.duration(1000)}
            source={require("../../assets/images/welcome.png")}
            style={styles.wlcomeImage}
            resizeMode="contain"
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Animated.View
            entering={
              shouldAnimate
                ? FadeInDown.duration(700).easing(Easing.out(Easing.cubic))
                : undefined
            }
            renderToHardwareTextureAndroid
            shouldRasterizeIOS
            style={{ alignItems: "center" }}
          >
            <Content size={30} fontWeight={"800"}>
              Always take control
            </Content>
            <Content size={30} fontWeight={"800"}>
              of your money
            </Content>
          </Animated.View>
          <Animated.View
            entering={
              shouldAnimate
                ? FadeInDown.duration(700)
                    .delay(100)
                    .easing(Easing.out(Easing.cubic))
                : undefined
            }
            renderToHardwareTextureAndroid
            shouldRasterizeIOS
            style={{ alignItems: "center", gap: 2 }}
          >
            <Content size={17}>Money must be arranged to set a better</Content>
            <Content size={17}>lifestyle in future</Content>
          </Animated.View>
          <Animated.View
            entering={
              shouldAnimate
                ? FadeInDown.duration(700)
                    .delay(200)
                    .easing(Easing.out(Easing.cubic))
                : undefined
            }
            renderToHardwareTextureAndroid
            shouldRasterizeIOS
            style={styles.buttonContainer}
          >
            <Button
              onPress={() => router.push("/(auth)/register")}
              style={{ marginBottom: 15 }}
            >
              <Content size={22} color={colors.neutral900} fontWeight={"600"}>
                Get Started
              </Content>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  wlcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingY._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
