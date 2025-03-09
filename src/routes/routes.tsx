import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useTheme } from "styled-components/native";

import { AppRoutes } from "@/routes/app.routes";

export function Routes() {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: colors["gray-700"] }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
