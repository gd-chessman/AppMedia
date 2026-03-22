import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiveProgressScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const pct = 0.45;

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
            <Text className="text-xl font-semibold text-white">Đang nhận</Text>
            <Text className="mt-1 text-sm text-neutral-400">Từ thiết bị gửi (demo)</Text>
          </View>
        </View>

        <View className="mb-2 flex-row justify-between">
          <Text className="text-sm text-neutral-400">Tiến độ</Text>
          <Text className="text-sm font-medium text-blue-400">{Math.round(pct * 100)}%</Text>
        </View>
        <View className="h-3 overflow-hidden rounded-full bg-white/5">
          <View className="h-full rounded-full bg-blue-500" style={{ width: `${pct * 100}%` }} />
        </View>

        <View className="mt-8 rounded-2xl bg-neutral-900/70 p-4">
          <Text className="text-sm font-medium text-neutral-300">vacation_2024.zip</Text>
          <Text className="mt-1 text-xs text-neutral-600">Đang lưu vào Thư mục nhận (demo)</Text>
        </View>

        <Pressable
          onPress={() => router.replace("/receive/complete")}
          className="mt-auto mb-4 items-center rounded-2xl py-3 active:bg-white/5"
        >
          <Text className="text-sm font-medium text-neutral-300">Demo: hoàn tất nhận</Text>
        </Pressable>
      </View>
    </View>
  );
}
