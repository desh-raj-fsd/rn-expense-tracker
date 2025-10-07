import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Content from "@/components/Content";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

const login = () => {
  const router = useRouter();
  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
    console.info("email", emailRef.current);
    console.info("password", passwordRef.current);
    console.info("good to go!");
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Content size={30} fontWeight={"800"}>
            Hey,
          </Content>
          <Content size={30} fontWeight={"800"}>
            Welcome Back
          </Content>
        </View>
        {/* Form */}
        <View style={styles.form}>
          <Content size={16} color={colors.textLight}>
            Login now to track your expenses
          </Content>
          {/* Email Input */}
          <Input
            placeholder="Enter your Email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <Icons.AtIcon
                size={verticalScale(26)}
                color={colors.neutral400}
              />
            }
          />
          {/* Password Input */}
          <Input
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            onChangeText={(value) => (passwordRef.current = value)}
            icon={
              <Icons.PasswordIcon
                size={verticalScale(26)}
                color={colors.neutral400}
              />
            }
            rightIcon={
              showPassword ? (
                <Icons.EyeSlashIcon
                  size={verticalScale(24)}
                  color={colors.neutral300}
                  weight="regular"
                />
              ) : (
                <Icons.EyeIcon
                  size={verticalScale(24)}
                  color={colors.neutral300}
                  weight="regular"
                />
              )
            }
            onRightIconPress={() => setShowPassword((p) => !p)}
          />
          <Content
            size={14}
            color={colors.text}
            style={{ alignSelf: "flex-end" }}
          >
            Forgot Password?
          </Content>
          {/* Login Button */}
          <Button loading={isLoading} onPress={handleSubmit}>
            <Content size={21} color={colors.black} fontWeight={"700"}>
              Login
            </Content>
          </Button>
        </View>
        <View style={styles.footer}>
          <Content size={15}>Don't have an account?</Content>
          <Pressable onPress={() => router.push("/(auth)/register")}>
            <Content size={15} fontWeight={"700"} color={colors.primary}>
              Sign up
            </Content>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingY._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
