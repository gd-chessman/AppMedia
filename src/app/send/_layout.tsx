import { Stack } from "expo-router";

export default function SendStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#0a0a0a" },
        /** Tránh nội dung modal chạm mép hệ thống trên một số máy */
        animation: "slide_from_right",
      }}
    />
  );
}
