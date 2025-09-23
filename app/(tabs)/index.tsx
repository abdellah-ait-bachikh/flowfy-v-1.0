import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/colors";
import { Link, useRouter } from "expo-router";
import restaurant_logo from "@/assets/images/icons/restaurant.png";
import supermarket_logo from "@/assets/images/icons/supermarket.png";
import pharmacy_logo from "@/assets/images/icons/pharmacy.png";
import custom_logo from "@/assets/images/icons/custom.png";
import AppText from "@/components/AppText";
const Index = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  // Reverse the array for Arabic
  const cards = [
    {
      id: 1,
      name: t("screens.(tabs).index.horizental_scroll.name.restaurant"),
      description: t(
        "screens.(tabs).index.horizental_scroll.description.restaurant"
      ),
      image: restaurant_logo,
      href: "restaurant",
    },
    {
      id: 2,
      name: t("screens.(tabs).index.horizental_scroll.name.supermarket"),
      description: t(
        "screens.(tabs).index.horizental_scroll.description.supermarket"
      ),
      image: supermarket_logo,
      href: "supermarket",
    },
    {
      id: 3,
      name: t("screens.(tabs).index.horizental_scroll.name.pharmacy"),
      description: t(
        "screens.(tabs).index.horizental_scroll.description.pharmacy"
      ),
      image: pharmacy_logo,
      href: "pharmacy",
    },
    {
      id: 4,
      name: t("screens.(tabs).index.horizental_scroll.name.custom"),
      description: t(
        "screens.(tabs).index.horizental_scroll.description.custom"
      ),
      image: custom_logo,
      href: "custom",
    },
  ] as const;
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
          <AppText style={styles.horizontal_scroll_container_title}>
            {t("screens.(tabs).index.categories")}
          </AppText>
        </View>
        <ScrollView
          horizontal
          style={[
            styles.horizontal_scroll,
            // { flexDirection: i18n.language === "ar" ? "row-reverse" : "row" },
          ]}
          // contentContainerStyle={{
          //   flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          // }}
          showsHorizontalScrollIndicator={false}
        >
          {cards.map((card) => (
            <TouchableOpacity
              activeOpacity={0.4}
              key={card.id}
              style={[
                styles.horizontal_scroll_card,
                {
                  marginRight: i18n.language === "ar" ? 0 : 15,
                  marginLeft: i18n.language === "ar" ? 15 : 0,
                  flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
                },
              ]}
            >
              <Image source={card.image} style={styles.card_img} />
              <View
                style={[
                  styles.horizontal_scroll_card_body,
                  {
                    alignItems:
                      i18n.language === "ar" ? "flex-end" : "flex-start",
                  },
                ]}
              >
                <AppText style={styles.horizontal_scroll_card_body_title}>
                  {card.name}
                </AppText>
                <AppText
                  style={[
                    styles.horizontal_scroll_card_body_description,
                    { textAlign: i18n.language === "ar" ? "right" : "left" },
                  ]}
                >
                  {card.description}
                </AppText>
              </View>
            </TouchableOpacity>
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
  input_search: { paddingHorizontal: 20, fontFamily: "SpaceMono" },
  horizontal_scroll_container: { padding: 20, overflow: "hidden", gap: 5 },
  horizontal_scroll_container_title: { fontFamily: "SpaceMonoBold" },
  horizontal_scroll: {
    height: 120,
    flexDirection: "row",
    gap: 10,
  },
  horizontal_scroll_card: {
    width: 250,
    height: 120,
    backgroundColor: colors.gray_50,
    justifyContent: "flex-start",
    gap: 15,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gray_100,
  },
  card_img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  horizontal_scroll_card_body: { flex: 1, gap: 5 },
  horizontal_scroll_card_body_title: {
    fontSize: 22,
    fontFamily: "SpaceMonoSemiBold",
  },
  horizontal_scroll_card_body_description: {
    fontSize: 10,
    fontFamily: "SpaceMonoSemiBold",
    color: colors.gray_300,
  },
});
export default Index;
