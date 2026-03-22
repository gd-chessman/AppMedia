import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-reanimated";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0a0a0a" },
        }}
      >
        <Stack.Screen name="(main)" />
        <Stack.Screen
          name="send"
          options={{ presentation: "fullScreenModal", animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="receive"
          options={{ presentation: "fullScreenModal", animation: "slide_from_right" }}
        />
        <Stack.Screen name="onboarding" options={{ presentation: "modal" }} />
        <Stack.Screen name="permissions" options={{ presentation: "modal" }} />
      </Stack>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
