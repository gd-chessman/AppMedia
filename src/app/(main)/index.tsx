import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QUICK_ACTIONS: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  href: Href;
  iconColor: string;
  iconBg: string;
}[] = [
  {
    label: "Thiết bị",
    icon: "phone-portrait-outline",
    href: "/devices",
    iconColor: "#a78bfa",
    iconBg: "bg-violet-400/20",
  },
  {
    label: "Ghép mã",
    icon: "link-outline",
    href: "/send/pair",
    iconColor: "#60a5fa",
    iconBg: "bg-blue-400/20",
  },
  {
    label: "Quét mã",
    icon: "scan-outline",
    href: "/send/pair",
    iconColor: "#fbbf24",
    iconBg: "bg-amber-400/20",
  },
  {
    label: "Cài đặt",
    icon: "settings-outline",
    href: "/settings",
    iconColor: "#34d399",
    iconBg: "bg-emerald-400/20",
  },
];

export default function HubScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top", "left", "right"]}>
      <View className="flex-1 px-5 pt-2">
        <View>
          <Text className="text-2xl font-bold text-white">AppMedia</Text>
          <Text className="mt-1 text-sm text-neutral-400">
            Chia sẻ file trên cùng mạng WiFi — không cần máy chủ
          </Text>
        </View>

        <View className="mt-3 flex-row items-center gap-2 rounded-xl bg-neutral-900/70 px-3 py-2.5">
          <View className="h-2 w-2 rounded-full bg-green-400" />
          <Text className="flex-1 text-xs text-neutral-400">
            Trạng thái mạng (demo): Đã kết nối WiFi
          </Text>
        </View>

        <View className="mt-6">
          <Text className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Thao tác nhanh
          </Text>
          <View className="gap-2">
            {[0, 2].map((start) => (
              <View key={start} className="flex-row gap-2">
                {QUICK_ACTIONS.slice(start, start + 2).map((action) => (
                  <Pressable
                    key={action.label}
                    accessibilityLabel={action.label}
                    onPress={() => router.push(action.href)}
                    className="min-h-[56px] flex-1 flex-row items-center gap-2.5 rounded-2xl bg-neutral-900/70 px-2.5 py-3 active:bg-white/5"
                  >
                    <View
                      className={`h-10 w-10 shrink-0 items-center justify-center rounded-xl ${action.iconBg}`}
                    >
                      <Ionicons name={action.icon} size={20} color={action.iconColor} />
                    </View>
                    <Text className="flex-1 text-sm font-semibold text-white" numberOfLines={2}>
                      {action.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ))}
          </View>
        </View>

        <View className="mt-8 gap-4">
          <Pressable
            onPress={() => router.push("/send")}
            className="overflow-hidden rounded-2xl bg-neutral-900/70 p-5 active:opacity-90"
          >
            <View className="flex-row items-center gap-4">
              <View className="h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/20">
                <Ionicons name="cloud-upload-outline" size={28} color="#60a5fa" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-white">Gửi file</Text>
                <Text className="mt-1 text-sm text-neutral-400">
                  Chọn ảnh, video hoặc tài liệu để gửi
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="#60a5fa" />
            </View>
          </Pressable>

          <Pressable
            onPress={() => router.push("/receive")}
            className="overflow-hidden rounded-2xl bg-neutral-900/70 p-5 active:opacity-90"
          >
            <View className="flex-row items-center gap-4">
              <View className="h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/20">
                <Ionicons name="cloud-download-outline" size={28} color="#a78bfa" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-white">Nhận file</Text>
                <Text className="mt-1 text-sm text-neutral-400">
                  Hiển thị mã ghép để máy gửi kết nối
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="#a78bfa" />
            </View>
          </Pressable>
        </View>

        <View className="mt-10 rounded-2xl bg-black/30 p-4">
          <Text className="text-center text-xs leading-5 text-neutral-600">
            Hai thiết bị phải dùng chung WiFi. Lần đầu ghép bằng mã; các lần sau có thể chọn
            thiết bị đã lưu ở tab Thiết bị.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
