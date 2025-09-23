import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePathname, useRouter, useSegments } from "expo-router";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/flowfy-bg-transparent-croped.png";
const Header = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const handleBack = () => {
    if (pathname === "/") {
      if (router.canGoBack()) {
        router.back();
      } else {
        return;
      }
      router.replace("/");
    } else {
      router.push("/(tabs)");
    }
  };
  return (
    <>
      <StatusBar style="light" translucent />
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View
          style={[
            styles.wrapper,
          
          ]}
        >
          <View>
            <Pressable
              onPress={handleBack}
              style={[
                styles.btn_back,
                { transform: [{ scaleX: isRTL ? -1 : 1 }] },
              ]}
            >
              <MaterialIcons name="arrow-back-ios" size={25} />
            </Pressable>
          </View>
          <View>
            <Image source={logo} style={styles.logo} />
          </View>
          <View>
            <Pressable onPress={(handleBack) => {}} style={styles.btn_location}>
              <Entypo name="location" size={25} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "transparent" },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    paddingHorizontal: 10,flexDirection: "row"
  },
  btn_back: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 100, resizeMode: "contain" },
  btn_location: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});
export default Header;
