import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TRUSTED = [
  { id: "1", name: "iPhone của Lan", subtitle: "Đã ghép · cùng WiFi" },
];

export default function SendRecipientScreen() {
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
            <Text className="text-xl font-semibold text-white">Gửi tới</Text>
            <Text className="mt-1 text-sm text-neutral-400">Chọn thiết bị đã ghép hoặc ghép mới</Text>
          </View>
        </View>

        {TRUSTED.length > 0 ? (
          <View className="mb-4">
            {TRUSTED.map((d) => (
              <Pressable
                key={d.id}
                onPress={() => router.push("/send/progress")}
                className="mb-2 flex-row items-center gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3.5 active:bg-white/10"
              >
                <View className="h-10 w-10 items-center justify-center rounded-xl bg-violet-400/20">
                  <Ionicons name="phone-portrait-outline" size={20} color="#a78bfa" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-white">{d.name}</Text>
                  <Text className="text-xs text-neutral-600">{d.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#a78bfa" />
              </Pressable>
            ))}
          </View>
        ) : null}

        <Pressable
          onPress={() => router.push("/send/pair")}
          className="flex-row items-center gap-3 rounded-2xl bg-blue-500/10 px-4 py-4 active:bg-blue-500/20"
        >
          <View className="h-10 w-10 items-center justify-center rounded-xl bg-blue-400/20">
            <Ionicons name="link-outline" size={22} color="#60a5fa" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-blue-200">Thêm thiết bị mới</Text>
            <Text className="text-xs text-blue-200/70">Nhập mã hiển thị trên máy nhận</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#fbbf24" />
        </Pressable>
      </View>
    </View>
  );
}
