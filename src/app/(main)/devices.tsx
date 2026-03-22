import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** Demo: để trống để hiện trạng thái “chưa có thiết bị”; đổi thành mảng có phần tử khi cần xem danh sách */
const MOCK_DEVICES: { id: string; name: string; last: string }[] = [];

export default function DevicesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right"]}>
      <View className="flex-1 px-5 pt-2">
        <View className="flex-row items-start justify-between gap-3">
          <View className="min-w-0 flex-1 pr-2">
            <Text className="text-xl font-bold text-white">Thiết bị đã ghép</Text>
            <Text className="mt-1 text-sm text-neutral-400">
              Danh sách thiết bị tin cậy (dữ liệu demo)
            </Text>
          </View>
          <Pressable
            accessibilityLabel="Quét mã"
            onPress={() => router.push("/send/pair")}
            className="h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 active:bg-amber-400/30"
          >
            <Ionicons name="scan-outline" size={24} color="#fbbf24" />
          </Pressable>
        </View>

        <FlatList
          className="mt-6"
          data={MOCK_DEVICES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24, gap: 10 }}
          ListEmptyComponent={
            <View className="items-center py-16">
              <Ionicons name="phone-portrait-outline" size={48} color="#a78bfa" />
              <Text className="mt-4 text-center text-neutral-600">
                Chưa có thiết bị nào.{"\n"}Gửi hoặc nhận file lần đầu để ghép.
              </Text>
              <Pressable
                onPress={() => router.push("/send/pair")}
                className="mt-6 rounded-xl bg-white px-5 py-3 active:bg-white/90"
              >
                <Text className="font-semibold text-neutral-900">Ghép bằng mã</Text>
              </Pressable>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable className="flex-row items-center gap-3 rounded-2xl bg-neutral-900/70 px-4 py-3.5 active:bg-white/10">
              <View className="h-11 w-11 items-center justify-center rounded-xl bg-blue-400/20">
                <Ionicons name="hardware-chip-outline" size={22} color="#60a5fa" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-white">{item.name}</Text>
                <Text className="mt-0.5 text-xs text-neutral-600">Lần cuối: {item.last}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#60a5fa" />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
