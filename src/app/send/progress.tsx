import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SendProgressScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const pct = 0.62;

  return (
    <View className="flex-1 bg-neutral-950" style={modalInsetPadding(insets)}>
      <View className="flex-1 px-5 pt-2">
        <View className="mb-6 flex-row items-start gap-3">
          <Pressable
            onPress={() => router.back()}
            className="mt-0.5 h-10 w-10 items-center justify-center rounded-xl bg-white/10 active:bg-white/20"
          >
            <Ionicons name="chevron-back" size={22} color="#fafafa" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-white">Đang gửi</Text>
            <Text className="mt-1 text-sm text-neutral-400">clip_quay.mp4 · demo tiến trình</Text>
          </View>
        </View>

        <View className="mb-2 flex-row justify-between">
          <Text className="text-sm text-neutral-400">Tổng tiến độ</Text>
          <Text className="text-sm font-medium text-blue-400">{Math.round(pct * 100)}%</Text>
        </View>
        <View className="h-3 overflow-hidden rounded-full bg-white/5">
          <View className="h-full rounded-full bg-blue-500" style={{ width: `${pct * 100}%` }} />
        </View>

        <View className="mt-8 gap-4 rounded-2xl bg-neutral-900/70 p-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-neutral-400">IMG_2024.jpg</Text>
            <Ionicons name="checkmark-circle" size={22} color="#4ade80" />
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-neutral-400">clip_quay.mp4</Text>
            <Text className="text-sm text-blue-400">Đang gửi…</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-neutral-400">tai_lieu.pdf</Text>
            <Text className="text-sm text-neutral-600">Chờ</Text>
          </View>
        </View>

        <View className="mt-auto gap-3 pb-2">
          <Pressable
            onPress={() => router.replace("/send/complete")}
            className="items-center rounded-2xl py-3 active:bg-white/5"
          >
            <Text className="text-sm font-medium text-neutral-300">Demo: bỏ qua tới hoàn tất</Text>
          </Pressable>
          <Pressable className="items-center py-2">
            <Text className="text-sm text-rose-400">Hủy gửi (demo)</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
