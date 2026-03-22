import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiveReadyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const code = "K7X3-9M2P";

  return (
    <View className="flex-1 bg-neutral-950" style={modalInsetPadding(insets)}>
      <View className="flex-1 px-5 pt-2">
        <View className="mb-4 flex-row items-start gap-3">
          <Pressable
            onPress={() => router.back()}
            className="mt-0.5 h-10 w-10 items-center justify-center rounded-xl bg-white/10 active:bg-white/20"
          >
            <Ionicons name="chevron-back" size={22} color="#fafafa" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-white">Sẵn sàng nhận</Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Máy gửi nhập mã hoặc quét QR (demo)
            </Text>
          </View>
        </View>

        <View className="mb-6 items-center rounded-2xl bg-neutral-900/70 px-6 py-10">
          <View className="mb-4 h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-blue-500/30 bg-neutral-950">
            <Ionicons name="qr-code-outline" size={72} color="#a78bfa" />
            <Text className="mt-2 text-xs text-neutral-600">QR (sau)</Text>
          </View>
          <Text className="text-xs uppercase tracking-wider text-neutral-600">Mã ghép</Text>
          <Text className="mt-2 text-3xl font-bold tracking-[0.2em] text-blue-400">{code}</Text>
        </View>

        <View className="mb-4 flex-row items-center gap-2 rounded-xl bg-green-400/10 px-3 py-2.5">
          <View className="h-2 w-2 rounded-full bg-green-400" />
          <Text className="flex-1 text-xs text-green-400/90">Đang lắng nghe trên mạng LAN (demo)</Text>
        </View>

        <Pressable
          onPress={() => router.push("/receive/progress")}
          className="flex-row items-center justify-center gap-2 rounded-2xl bg-neutral-900/70 py-3.5 active:bg-white/5"
        >
          <Text className="text-sm font-medium text-neutral-300">Demo: có người đang gửi…</Text>
        </Pressable>
      </View>
    </View>
  );
}
