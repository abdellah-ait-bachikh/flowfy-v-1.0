import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { categories, restaurantSliderData } from "@/constants/data";
import defaultRestauranLogo from "@/assets/images/icons/default_restaurant.png";
import { colors } from "@/constants/colors";
import { useTranslation } from "react-i18next";
import AppText from "@/components/AppText";

const CategoriesSlider = () => {
  const progress = useSharedValue<number>(0);
  const window = Dimensions.get("window");
  const { i18n, t } = useTranslation("");
  const isRTL = i18n.language === "ar";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>
          {t(`screens.(tabs).index.horizontal_categories_scroll.title`)}
        </Text>
      </View>
      <View style={styles.scroll_container}>
        <Carousel
          // loop={true}
          width={window.width-30}
          height={150}
          pagingEnabled
          snapEnabled
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 80,
          }}
          containerStyle={{ width: "100%", height: 100 }}
          i18nIsDynamicList
          onProgressChange={progress}
          renderItem={({ item, index }) => (
            <View style={[styles.item, { width: window.width * 0.65 }]}>
              <Image
                source={item.image || defaultRestauranLogo}
                style={styles.image}
              />
              <View style={styles.card_body}>
                <AppText style={styles.title}>
                  {t(
                    `screens.(tabs).index.horizontal_categories_scroll.name.${item.name}`
                  )}
                </AppText>
                <AppText style={styles.description}>
                  {t(
                    `screens.(tabs).index.horizontal_categories_scroll.description.${item.name}`
                  )}
                </AppText>
              </View>
            </View>
          )}
          data={categories}
        />
      </View>
      <Text>{t(
                    `screens.(tabs).index.horizontal_categories_scroll.name.${"custom"}`
                  )}</Text>
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  container: { marginTop: 10, gap: 5 },
  header: {},
  header_title: { fontFamily: "SpaceMonoBold" },
  scroll_container: {
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  item: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: colors.gray_50,
    borderWidth: 2,
    borderColor: colors.gray_100,
    overflow: "hidden",
    height: 100,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 15,
  },
  card_body: { flex: 1, flexDirection: "column", alignItems: "flex-start" },
  title: {
    fontSize: 20,
  },
  description: { fontSize: 13, color: colors.gray_300 },
});
