import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsSendOptionsScreen() {
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
            <Text className="text-xl font-semibold text-white">Khi gửi file</Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Hành vi sau khi gửi thành công và giới hạn
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between rounded-2xl bg-neutral-900/70 px-4 py-3.5">
          <View className="flex-1 pr-3">
            <Text className="text-base font-medium text-white">Xóa file sau khi gửi xong</Text>
            <Text className="mt-1 text-xs text-neutral-600">Chỉ khi máy nhận xác nhận thành công</Text>
          </View>
          <Switch value={false} disabled />
        </View>

        <View className="mt-4">
          <Text className="mb-2 text-sm text-neutral-400">Số file tối đa mỗi lần gửi (demo)</Text>
          <TextInput
            editable={false}
            placeholder="Ví dụ: 50"
            placeholderTextColor="#737373"
            className="rounded-xl bg-neutral-900/70 px-4 py-3.5 text-base text-white"
            defaultValue="50"
          />
        </View>

        <View className="mt-4 rounded-xl bg-neutral-900/70 p-3">
          <Text className="text-xs leading-5 text-neutral-600">
            Logic lưu cài đặt và áp dụng khi gửi sẽ được nối sau.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
