import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Nhóm route `(main)` — thanh tab (Trang chủ / Thiết bị / Cài đặt). Không dùng tên thư mục `(tabs)`.
 */
export default function MainTabsLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopColor: "rgba(255, 255, 255, 0.1)",
          borderTopWidth: 1,
          paddingTop: 2,
          /** Chỉ đệm vùng home indicator; không cộng thêm chiều cao thừa */
          paddingBottom: bottomInset,
          /** Thu gọn hàng icon + nhãn (trước ~52) để tab sát đáy hơn */
          height: 44 + bottomInset,
        },
        tabBarActiveTintColor: "#60a5fa",
        tabBarInactiveTintColor: "#737373",
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="devices"
        options={{
          title: "Thiết bị",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="phone-portrait-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Cài đặt",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
