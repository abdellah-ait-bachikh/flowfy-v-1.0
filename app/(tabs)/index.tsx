import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const Index = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const cards = ["Card 1", "Card 2", "Card 3"];
  // Reverse the array for Arabic
  return (
    <ScrollView style={styles.container}>
      <View style={styles.btn_searach_container}>
        <Pressable
          style={styles.btn_searach}
          onPress={() => router.push("/(tabs)/search")}
        >
          <TextInput
            style={[styles.input_search]}
            placeholder={t("screens.(tabs).index.btn_search_placehaulder")}
            readOnly
          />
        </Pressable>
      </View>

      <View
        style={[
          styles.horizontal_scroll_container,
          { alignItems: i18n.language === "ar" ? "flex-end" : "flex-start" },
        ]}
      >
        <View>
          <Text>{t("screens.(tabs).index.categories")}</Text>
        </View>
        <ScrollView
          horizontal
          style={[
            styles.horizontal_scroll,
            // { flexDirection: i18n.language === "ar" ? "row-reverse" : "row" },
          ]}
          contentContainerStyle={{
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {cards.map((card, index) => (
            <View
              key={index}
              style={[
                styles.horizontal_scroll_card,
                {
                  marginRight: i18n.language === "ar" ? 0 : 15,
                  marginLeft: i18n.language === "ar" ? 15 : 0,
                },
              ]}
            >
              <Text>{card}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", backgroundColor: "transparent", flex: 1 },
  btn_searach_container: { paddingHorizontal: 20, width: "100%" },
  btn_searach: {
    width: "100%",
    backgroundColor: colors.gray,
    borderRadius: 10,
  },
  input_search: { paddingHorizontal: 20 },
  horizontal_scroll_container: { padding: 20, overflow: "hidden", gap: 5 },
  horizontal_scroll: {
    height: 120,
    flexDirection: "row",
    gap: 10,
  },
  horizontal_scroll_card: {
    width: 200, // fixed width for horizontal scrolling
    height: 120,
    backgroundColor: colors.gray,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default Index;
