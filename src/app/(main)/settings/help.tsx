import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQ = [
  {
    q: "Cần internet không?",
    a: "Không bắt buộc. Hai máy chỉ cần cùng mạng WiFi (LAN).",
  },
  {
    q: "Không thấy thiết bị?",
    a: "Kiểm tra cùng WiFi, tắt AP isolation trên router nếu có, thử ghép lại bằng mã.",
  },
  {
    q: "Quyền truy cập?",
    a: "Ứng dụng cần quyền ảnh/video hoặc file để chọn và lưu nội dung.",
  },
];

export default function SettingsHelpScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right"]}>
      <View className="flex-1 px-5 pt-2">
        <View className="mb-4 flex-row items-start gap-3">
          <Pressable
            onPress={() => router.back()}
            className="mt-0.5 h-10 w-10 items-center justify-center rounded-xl bg-white/10 active:bg-white/20"
          >
            <Ionicons name="chevron-back" size={22} color="#fafafa" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-white">Trợ giúp</Text>
            <Text className="mt-1 text-sm text-neutral-400">Câu hỏi thường gặp</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
          {FAQ.map((item, i) => (
            <View
              key={i}
              className="mb-3 rounded-2xl bg-neutral-900/70 px-4 py-3.5"
            >
              <Text className="text-sm font-semibold text-blue-400/90">{item.q}</Text>
              <Text className="mt-2 text-sm leading-5 text-neutral-400">{item.a}</Text>
            </View>
          ))}

          <View className="mt-4 gap-3 pt-4">
            <Pressable onPress={() => router.push("/onboarding")}>
              <Text className="text-center text-sm text-blue-500">Màn giới thiệu (demo)</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/permissions")}>
              <Text className="text-center text-sm text-blue-500">Màn quyền truy cập (demo)</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
