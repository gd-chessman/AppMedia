import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsStorageScreen() {
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
            <Text className="text-xl font-semibold text-white">Lưu trữ</Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Nơi lưu file nhận được và cách xếp thư mục
            </Text>
          </View>
        </View>

        <Pressable className="mb-4 flex-row items-center justify-between rounded-2xl bg-neutral-900/70 px-4 py-4">
          <View className="flex-1 pr-3">
            <Text className="text-base font-medium text-white">Thư mục nhận file</Text>
            <Text className="mt-1 text-xs text-neutral-600" numberOfLines={2}>
              /Documents/AppMedia/Inbox (demo — sẽ chọn thư mục thật sau)
            </Text>
          </View>
          <Ionicons name="folder-outline" size={22} color="#fbbf24" />
        </Pressable>

        <View className="flex-row items-center justify-between rounded-2xl bg-neutral-900/70 px-4 py-3.5">
          <View className="flex-1 pr-3">
            <Text className="text-base font-medium text-white">Tự phân thư mục theo loại</Text>
            <Text className="mt-1 text-xs text-neutral-600">
              Ảnh / Video / Âm thanh / Khác
            </Text>
          </View>
          <Switch value={true} disabled />
        </View>

        <View className="mt-4 rounded-xl bg-neutral-900/70 p-3">
          <Text className="text-xs leading-5 text-neutral-600">
            Gợi ý: Trên iOS/Android, đường dẫn thật sẽ phụ thuộc quyền và phiên bản hệ điều hành.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
