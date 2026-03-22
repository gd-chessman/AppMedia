import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SendCompleteScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-neutral-950" style={modalInsetPadding(insets)}>
      <View className="flex-1 items-center justify-center px-6">
        <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-green-400/20">
          <Ionicons name="checkmark-circle" size={56} color="#4ade80" />
        </View>
        <Text className="text-center text-2xl font-bold text-white">Gửi hoàn tất</Text>
        <Text className="mt-3 text-center text-sm leading-5 text-neutral-400">
          3 file đã được gửi tới thiết bị nhận (demo).{"\n"}
          Nếu bật &quot;Xóa sau khi gửi&quot;, file gốc sẽ được xóa sau khi xác nhận.
        </Text>

        <View className="mt-8 w-full max-w-sm rounded-2xl bg-neutral-900/70 px-4 py-3">
          <Text className="text-center text-xs text-neutral-600">
            Trạng thái xóa file gốc: chưa áp dụng (chờ logic)
          </Text>
        </View>

        <Pressable
          onPress={() => router.replace("/")}
          className="mt-10 w-full max-w-sm rounded-2xl bg-white py-4 active:bg-white/90"
        >
          <Text className="text-center text-base font-semibold text-neutral-900">Về trang chủ</Text>
        </Pressable>
      </View>
    </View>
  );
}
