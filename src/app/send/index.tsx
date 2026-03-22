import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DEMO_FILES = [
  { id: "1", name: "IMG_2024.jpg", size: "2,4 MB", type: "Ảnh" },
  { id: "2", name: "clip_quay.mp4", size: "128 MB", type: "Video" },
  { id: "3", name: "tai_lieu.pdf", size: "1,1 MB", type: "Tài liệu" },
];

export default function SendPickScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
            <Text className="text-xl font-semibold text-white">Chọn nội dung gửi</Text>
            <Text className="mt-1 text-sm text-neutral-400">Danh sách demo — chọn file sẽ gắn sau</Text>
          </View>
        </View>

        <Pressable className="mb-5 flex-row items-center justify-center gap-2 rounded-2xl border border-dashed border-blue-500/20 bg-blue-500/10 py-8 active:bg-blue-500/10">
          <Ionicons name="images-outline" size={26} color="#60a5fa" />
          <Text className="text-base font-medium text-blue-300">Chạm để chọn ảnh / video / file</Text>
        </Pressable>

        <Text className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-600">
          Đã chọn (demo)
        </Text>
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 12 }}
        >
          {DEMO_FILES.map((f) => (
            <View
              key={f.id}
              className="mb-2 flex-row items-center gap-3 rounded-xl bg-neutral-900/70 px-3 py-3"
            >
              <Ionicons name="document-text-outline" size={22} color="#fbbf24" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-white" numberOfLines={1}>
                  {f.name}
                </Text>
                <Text className="text-xs text-neutral-600">
                  {f.type} · {f.size}
                </Text>
              </View>
              <Ionicons name="checkmark-circle" size={22} color="#4ade80" />
            </View>
          ))}
        </ScrollView>

        <View className="mt-1 pt-4">
          <Pressable
            onPress={() => router.push("/send/recipient")}
            className="flex-row items-center justify-center gap-2 rounded-2xl bg-white py-4 active:bg-white/90"
          >
            <Text className="text-base font-semibold text-neutral-900">Tiếp tục</Text>
            <Ionicons name="arrow-forward" size={20} color="#171717" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
