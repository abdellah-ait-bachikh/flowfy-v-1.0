import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { restaurantSliderData } from "@/constants/data";
import defaultRestauranLogo from "@/assets/images/icons/default_restaurant.png";
import { colors } from "@/constants/colors";
import { useTranslation } from "react-i18next";

const RestorantSlider = () => {
  const progress = useSharedValue<number>(0);
  const window = Dimensions.get("window");
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Restaurant</Text>
      </View>
      <View style={styles.scroll_container}>
        <Carousel
          autoPlay={true}
          // loop={true}
          width={window.width}
          height={258}
          pagingEnabled
          snapEnabled
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 100,
          }}
          autoPlayInterval={3500}
          i18nIsDynamicList
          onProgressChange={progress}
          renderItem={({ item, index }) => (
            <View style={[styles.item, { width: window.width * 0.8 }]}>
              <Image
                source={item.logo || defaultRestauranLogo}
                style={styles.image}
              />
              <Text style={styles.text}>
                {item.name} {item.id}
              </Text>
            </View>
          )}
          data={restaurantSliderData}
        />
      </View>
    </View>
  );
};

export default RestorantSlider;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  header: {},
  header_title: { fontFamily: "SpaceMonoBold" },
  scroll_container: {
    justifyContent: "center",
    alignItems: "center",
    height: 258,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.gray_50,
    borderWidth: 2,
    borderColor: colors.gray_100,
    overflow: "hidden",
    height: 250,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
  },
});
