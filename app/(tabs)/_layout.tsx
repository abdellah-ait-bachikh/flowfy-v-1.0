import { Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { AnimatedTabLabel } from "@/components/ui/AnimatedTabItem";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import { colors } from "@/constants/colors";
import LinearGradientCmp from "@/components/ui/LinearGradientCmp";

export default function TabLayout() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";

  const tabOrder = ["index", "search", "bag", "notifications", "profile"];

  return (
    <LinearGradientCmp
      colors={[
        colors.light_yellow,
        colors.white,
        colors.white,
        colors.white,
        colors.white,
        colors.white,
        colors.white,
        
        colors.gray,
      ]}
    >
      <Header />
      <Tabs
        initialRouteName="index"
        key={i18n.language} // <- add this line
        screenOptions={{
          tabBarActiveTintColor: "gray",
          animation: "shift",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            height: 110,
            position: Platform.OS === "ios" ? "absolute" : "relative",
            paddingTop: 10,
            flexDirection: rtl ? "row-reverse" : "row", // Add this
            direction: rtl ? "rtl" : "ltr", // Add this for proper RTL layout
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          sceneStyle: {
            backgroundColor: "transparent",
          },
          tabBarButton: (props) => {
            return <TouchableOpacity {...(props as any)} activeOpacity={1} />;
          },
        }}
      >
        {tabOrder.map((name) => {
          if (name === "index")
            return (
              <Tabs.Screen
                key={name}
                name="index"
                options={{
                  tabBarBadge: 12,
                  title: "Home",
                  tabBarLabel: ({ focused }) => (
                    <AnimatedTabLabel
                      focused={focused}
                      title={t("tabs.home", "Home")}
                    />
                  ),
                  tabBarIcon: ({ focused }) => (
                    <Feather
                      size={28}
                      name="home"
                      color={ focused ? focused ? colors.light_red :colors.gray_300 :colors.gray_300}
                    />
                  ),
                }}
              />
            );

          if (name === "search")
            return (
              <Tabs.Screen
                key={name}
                name="search"
                options={{
                  title: "Search",
                  tabBarLabel: ({ focused }) => (
                    <AnimatedTabLabel
                      focused={focused}
                      title={t("tabs.search", "Search")}
                    />
                  ),
                  tabBarIcon: ({ focused }) => (
                    <AntDesign
                      size={28}
                      name="search"
                      color={ focused ? colors.light_red :colors.gray_300}
                    />
                  ),
                }}
              />
            );

          if (name === "bag")
            return (
              <Tabs.Screen
                key={name}
                name="bag"
                options={{
                  title: "Bag",
                  tabBarLabel: ({ focused }) => (
                    <AnimatedTabLabel
                      focused={focused}
                      title={t("tabs.bag", "Bag")}
                    />
                  ),
                  tabBarIcon: ({ focused }) => (
                    <Feather
                      size={28}
                      name="shopping-cart"
                      color={ focused ? colors.light_red :colors.gray_300}
                    />
                  ),
                }}
              />
            );

          if (name === "notifications")
            return (
              <Tabs.Screen
                key={name}
                name="notifications"
                options={{
                  title: "Notifications",
                  tabBarLabel: ({ focused }) => (
                    <AnimatedTabLabel
                      focused={focused}
                      title={t("tabs.notifications", "Notifications")}
                    />
                  ),
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      size={28}
                      name="notifications-outline"
                      color={ focused ? colors.light_red :colors.gray_300}
                    />
                  ),
                }}
              />
            );

          if (name === "profile")
            return (
              <Tabs.Screen
                key={name}
                name="profile"
                options={{
                  title: "Profile",
                  tabBarLabel: ({ focused }) => (
                    <AnimatedTabLabel
                      focused={focused}
                      title={t("tabs.profile", "Profile")}
                    />
                  ),
                  tabBarIcon: ({ focused }) => (
                    <Octicons
                      size={28}
                      name="person"
                      color={ focused ? colors.light_red :colors.gray_300}
                    />
                  ),
                }}
              />
            );
        })}
      </Tabs>
    </LinearGradientCmp>
  );
}
