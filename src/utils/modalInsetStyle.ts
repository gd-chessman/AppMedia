import type { EdgeInsets } from "react-native-safe-area-context";

/** Padding theo vùng an toàn — dùng cho màn modal full screen (gửi/nhận) vì SafeAreaView đôi khi sai inset. */
export function modalInsetPadding(insets: EdgeInsets) {
  return {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
}
