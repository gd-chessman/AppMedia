import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsAppearanceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right"]}>
      <View className="flex-1 px-5 pt-2">
        <View className="mb-6 flex-row items-start gap-3">
          <Pressable
            onPress={() => router.back()}
            className="mt-0.5 h-10 w-10 items-center justify-center rounded-xl bg-white/10 active:bg-white/20"
          >
            <Ionicons name="chevron-back" size={22} color="#fafafa" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-white">Giao diện & ngôn ngữ</Text>
            <Text className="mt-1 text-sm text-neutral-400">Theo hệ thống hoặc tùy chọn</Text>
          </View>
        </View>

        <Pressable className="mb-3 flex-row items-center justify-between rounded-2xl bg-neutral-900/70 px-4 py-3.5">
          <Text className="text-base font-medium text-white">Chế độ giao diện</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-neutral-600">Theo hệ thống</Text>
            <Ionicons name="chevron-forward" size={18} color="#60a5fa" />
          </View>
        </Pressable>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-neutral-900/70 px-4 py-3.5">
          <Text className="text-base font-medium text-white">Ngôn ngữ</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-neutral-600">Tiếng Việt</Text>
            <Ionicons name="chevron-forward" size={18} color="#a78bfa" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
