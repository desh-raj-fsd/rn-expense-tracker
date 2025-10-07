import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/(auth)/welcome");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/splashImage.png")}
      ></Image>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});
