import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right", "bottom"]}>
      <View className="flex-1 justify-center px-6">
        <View className="mb-8 items-center">
          <View className="mb-6 h-24 w-24 items-center justify-center rounded-3xl bg-blue-400/20">
            <Ionicons name="wifi" size={48} color="#60a5fa" />
          </View>
          <Text className="text-center text-2xl font-bold text-white">Chào mừng AppMedia</Text>
          <Text className="mt-4 text-center text-base leading-6 text-neutral-400">
            Gửi và nhận ảnh, video và file trên cùng mạng WiFi. Không cần máy chủ trung tâm.
          </Text>
        </View>

        <View className="gap-3">
          <View className="flex-row gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3">
            <Ionicons name="link-outline" size={22} color="#60a5fa" />
            <Text className="flex-1 text-sm leading-5 text-neutral-400">
              Lần đầu ghép hai máy bằng mã hoặc QR; các lần sau chọn thiết bị đã lưu.
            </Text>
          </View>
          <View className="flex-row gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3">
            <Ionicons name="shield-checkmark-outline" size={22} color="#34d399" />
            <Text className="flex-1 text-sm leading-5 text-neutral-400">
              Hai thiết bị phải dùng chung WiFi. Dữ liệu không đi qua internet.
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.replace("/")}
          className="mt-12 rounded-2xl bg-white py-4 active:bg-white/90"
        >
          <Text className="text-center text-base font-semibold text-neutral-900">Bắt đầu</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
