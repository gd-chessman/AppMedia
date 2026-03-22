import { modalInsetPadding } from "@/utils/modalInsetStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiveCompleteScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-neutral-950" style={modalInsetPadding(insets)}>
      <View className="flex-1 items-center justify-center px-6">
        <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-blue-400/20">
          <Ionicons name="folder-open" size={48} color="#34d399" />
        </View>
        <Text className="text-center text-2xl font-bold text-white">Đã lưu file</Text>
        <Text className="mt-3 text-center text-sm leading-5 text-neutral-400">
          File đã được lưu theo cài đặt thư mục và phân loại (demo).{"\n"}
          Đường dẫn thật sẽ hiển thị sau khi có logic lưu trữ.
        </Text>

        <View className="mt-8 w-full max-w-sm rounded-2xl bg-neutral-900/70 px-4 py-3">
          <Text className="text-center text-xs text-neutral-600">
            /Documents/AppMedia/Images/… (ví dụ)
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
