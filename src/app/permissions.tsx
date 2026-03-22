import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ITEMS = [
  {
    icon: "wifi-outline" as const,
    title: "Mạng cục bộ",
    desc: "Tìm và kết nối thiết bị trên WiFi",
    iconColor: "#60a5fa",
    iconBg: "bg-blue-400/20",
  },
  {
    icon: "images-outline" as const,
    title: "Ảnh & video",
    desc: "Chọn và lưu nội dung đa phương tiện",
    iconColor: "#a78bfa",
    iconBg: "bg-violet-400/20",
  },
  {
    icon: "folder-outline" as const,
    title: "Tệp",
    desc: "Truy cập thư mục khi bạn chọn nơi lưu",
    iconColor: "#fbbf24",
    iconBg: "bg-amber-400/20",
  },
];

export default function PermissionsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right", "bottom"]}>
      <View className="flex-1 px-6 pt-4">
        <Text className="text-xl font-bold text-white">Quyền truy cập</Text>
        <Text className="mt-2 text-sm leading-5 text-neutral-400">
          Ứng dụng cần các quyền sau để hoạt động đúng. Bạn có thể cấp trong phần cài đặt hệ
          thống (logic xin quyền sẽ thêm sau).
        </Text>

        <View className="mt-8 gap-3">
          {ITEMS.map((item) => (
            <View
              key={item.title}
              className="flex-row items-center gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3.5"
            >
              <View className={`h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}>
                <Ionicons name={item.icon} size={22} color={item.iconColor} />
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-white">{item.title}</Text>
                <Text className="mt-0.5 text-xs text-neutral-600">{item.desc}</Text>
              </View>
              <Text className="text-xs font-medium text-amber-400">Chưa cấp</Text>
            </View>
          ))}
        </View>

        <View className="mt-auto gap-3 pb-4">
          <Pressable
            onPress={() => router.replace("/")}
            className="rounded-2xl bg-white py-4 active:bg-white/90"
          >
            <Text className="text-center text-base font-semibold text-neutral-900">Cho phép (demo)</Text>
          </Pressable>
          <Pressable onPress={() => router.back()}>
            <Text className="text-center text-sm text-neutral-600">Để sau</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
