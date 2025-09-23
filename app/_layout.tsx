import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { initI18next } from "../services/i18next";
import { initNotifications } from "../services/notifications";
import LinearGradientCmp from "@/components/ui/LinearGradientCmp";
import { colors } from "@/constants/colors";

export default function RootLayout() {
  
const [loaded] = useFonts({
  SpaceMonoThin: require("../assets/fonts/SUSEMono-Thin.ttf"),
  SpaceMonoExtraLight: require("../assets/fonts/SUSEMono-ExtraLight.ttf"),
  SpaceMonoLight: require("../assets/fonts/SUSEMono-Light.ttf"),
  SpaceMono: require("../assets/fonts/SUSEMono-Regular.ttf"),
  SpaceMonoMedium: require("../assets/fonts/SUSEMono-Medium.ttf"),
  SpaceMonoSemiBold: require("../assets/fonts/SUSEMono-SemiBold.ttf"),
  SpaceMonoBold: require("../assets/fonts/SUSEMono-Bold.ttf"),
  SpaceMonoExtraBold: require("../assets/fonts/SUSEMono-ExtraBold.ttf"),
});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // First load translations, then mark app ready
    async function prepare() {
      await initI18next();
      setReady(true); //  render the app immediately after translations
    }
    prepare();
  }, []);

  useEffect(() => {
    // Run notifications AFTER app is mounted
    if (ready) {
      const cleanupPromise = initNotifications(
        (notification) => {
          console.log("Notification received in foreground:", notification);
        },
        (response) => {
          console.log("User interacted with notification:", response);
        }
      );

      return () => {
        cleanupPromise.then((cleanup) => cleanup && cleanup());
      };
    }
  }, [ready]);

  if (!loaded || !ready) {
    return null;
  }

  return (
    <LinearGradientCmp colors={[colors.light_yellow,colors.yellow]}>
      <Stack
        screenOptions={{
          animation: "fade_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </LinearGradientCmp>
  );
}
