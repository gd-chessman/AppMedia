import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SendPairScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
            <Text className="text-xl font-semibold text-white">Ghép bằng mã</Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Nhập mã trên màn hình máy nhận (demo)
            </Text>
          </View>
        </View>

        <Text className="mb-2 text-sm text-neutral-400">Mã ghép</Text>
        <TextInput
          placeholder="VD: K7X3-9M2P"
          placeholderTextColor="#737373"
          className="rounded-2xl border border-blue-500/20 bg-neutral-900/70 px-4 py-4 text-center text-2xl font-semibold tracking-widest text-white"
          autoCapitalize="characters"
          maxLength={12}
        />

        <Pressable
          onPress={() => router.push("/send/progress")}
          className="mt-8 flex-row items-center justify-center gap-2 rounded-2xl bg-white py-4 active:bg-white/90"
        >
          <Text className="text-base font-semibold text-neutral-900">Kết nối & gửi</Text>
        </Pressable>

        <View className="mt-8 items-center">
          <Text className="text-xs text-neutral-600">Hoặc quét mã QR trên máy nhận (sau)</Text>
        </View>
      </View>
    </View>
  );
}
