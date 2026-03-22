import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ROWS = [
  {
    href: "/settings/storage" as const,
    title: "Lưu trữ",
    subtitle: "Thư mục nhận, phân loại theo loại file",
    icon: "folder-open-outline" as const,
    iconColor: "#fbbf24",
    iconBg: "bg-amber-400/20",
    chevronColor: "#fbbf24",
  },
  {
    href: "/settings/send-options" as const,
    title: "Khi gửi file",
    subtitle: "Xóa sau khi gửi, giới hạn số file",
    icon: "send-outline" as const,
    iconColor: "#60a5fa",
    iconBg: "bg-blue-400/20",
    chevronColor: "#60a5fa",
  },
  {
    href: "/settings/appearance" as const,
    title: "Giao diện & ngôn ngữ",
    subtitle: "Chế độ sáng/tối, ngôn ngữ",
    icon: "color-palette-outline" as const,
    iconColor: "#fb7185",
    iconBg: "bg-rose-400/20",
    chevronColor: "#fb7185",
  },
  {
    href: "/settings/help" as const,
    title: "Trợ giúp",
    subtitle: "Cùng WiFi, quyền truy cập",
    icon: "help-circle-outline" as const,
    iconColor: "#34d399",
    iconBg: "bg-emerald-400/20",
    chevronColor: "#34d399",
  },
];

export default function SettingsIndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right"]}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-2">
          <Text className="text-xl font-bold text-white">Cài đặt</Text>
          <Text className="mt-1 text-sm text-neutral-400">Tùy chọn ứng dụng (giao diện demo)</Text>

          <View className="mt-8 gap-2">
            {ROWS.map((row) => (
              <Pressable
                key={row.href}
                onPress={() => router.push(row.href)}
                className="flex-row items-center gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3.5 active:bg-white/10"
              >
                <View className={`h-10 w-10 items-center justify-center rounded-xl ${row.iconBg}`}>
                  <Ionicons name={row.icon} size={22} color={row.iconColor} />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-white">{row.title}</Text>
                  <Text className="mt-0.5 text-xs text-neutral-600">{row.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={row.chevronColor} />
              </Pressable>
            ))}
          </View>

          <Text className="mt-8 text-center text-xs text-neutral-600">Phiên bản 1.0.0 · AppMedia</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
