import AppText from "@/components/AppText";
import { colors } from "@/constants/colors";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, View, TouchableOpacity, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import defaultRestaurantImg from "@/assets/images/icons/default_restaurant_img.png";
import { formateMaxNumber, renderStars } from "@/lib/utils";
import { restaurantSliderData } from "@/constants/data";
import offreDiscount from "@/assets/images/icons/offer_discount.png";
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

function App() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const { t, i18n } = useTranslation("");

  const goPrev = () => {
    ref.current?.scrollTo({ count: -1, animated: true });
  };

  const goNext = () => {
    ref.current?.scrollTo({ count: 1, animated: true });
  };
  const isRtl = i18n.language === "ar";
  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <AppText style={{ fontFamily: "SpaceMonoBold", fontSize: 17 }}>
            {t(`screens.(tabs).index.horizontal_restaurant_scroll.title`)}
          </AppText>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <AppText style={{ fontFamily: "SpaceMonoBold", fontSize: 12 }}>
            {t(`screens.(tabs).index.horizontal_restaurant_scroll.more`)}
          </AppText>
          {isRtl ? (
            <AntDesign name="arrow-left" />
          ) : (
            <AntDesign name="arrow-right" />
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Carousel container */}
        <View
          style={{
            width: width - 30,
            height: 120,
            justifyContent: "center",
          }}
        >
          <Carousel
            ref={ref}
            width={width - 30}
            height={120}
            style={{ justifyContent: "center", width: width - 30 }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              width: width - 30,
            }}
            data={restaurantSliderData}
            onProgressChange={progress}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.8,
              parallaxScrollingOffset: 100,
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: 350,
                  flex: 1,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: "transparent",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: colors.gray_50,
                  padding: 15,
                  gap: 10,
                  margin: "auto",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* <View
                  style={{
                    position: "absolute",
                    top: 0, // move up a bit to compensate rotation
                    right: -35, // move right a bit to compensate rotation
                    backgroundColor: colors.red,
                    flexDirection:"row",
                    justifyContent: "center",
                    gap:0,
                    alignItems: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    transform: [{ rotate: "45deg" }],
                    zIndex: 10,
                    width: 100,
                    // elevation: 5,
                  }}
                >
                  <AppText
                    style={{ color: "white", fontSize: 9, fontWeight: "bold" }}
                  >
                    3 
                  </AppText><Image source={offreDiscount}style={{width:10,height:10,resizeMode:"contain"}}/>
                </View> */}
                <View>
                  <Image
                    source={defaultRestaurantImg}
                    style={{
                      resizeMode: "contain",
                      width: 90,
                      height: 90,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                  }}
                >
                  <AppText
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 20 }}
                  >
                    {item.name}
                  </AppText>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      gap: 5,
                    }}
                  >
                    <AppText> {item.rating} </AppText>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      {renderStars(item.rating).map((icon, i) => (
                        <FontAwesome
                          key={i}
                          name={icon}
                          size={20}
                          color={colors.yellow}
                        />
                      ))}
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection:
                          i18n.language === "ar" ? "row-reverse" : "row",
                        gap: 3,
                        alignItems: "center",
                      }}
                    >
                      <AppText style={{ fontSize: 15, color: colors.gray_300 }}>
                        {item.products_count}
                      </AppText>
                      <Ionicons
                        name="fast-food-outline"
                        size={14}
                        color={colors.gray_300}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 3,
                        alignItems: "center",
                        backgroundColor: colors.red,
                        borderRadius: 10,
                        paddingVertical: 1,
                        paddingHorizontal: 5,
                        borderWidth: 2,
                        borderColor: colors.gray,
                      }}
                    >
                      <AppText
                        style={{
                          fontSize: 17,
                          color: colors.white,
                          fontFamily: "SpaceMonoSemiBold",
                        }}
                      >
                        {formateMaxNumber(item.offers_count, 9)}
                      </AppText>
                      {/* <Image
                        source={offreDiscount}
                        style={{ width: 35, height: 35, resizeMode: "contain" }}
                      /> */}
                      {/* <MaterialIcons
                        name="local-offer"
                        size={15}
                        color={colors.white}
                      /> */}
                      <AppText
                        style={{
                          fontSize: 17,
                          color: colors.white,
                          fontFamily: "SpaceMonoSemiBold",
                        }}
                      >
                        {t(
                          `screens.(tabs).index.horizontal_restaurant_scroll.items.offers`
                        )}
                      </AppText>
                      <TouchableOpacity></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          <TouchableOpacity
            onPress={goPrev}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: [{ translateY: -25 }],
              padding: 10,
              borderRadius: 25,
              backgroundColor: "#dfdfdf44",
            }}
          >
            {isRtl ? (
              <SimpleLineIcons name="arrow-right" />
            ) : (
              <SimpleLineIcons name="arrow-left" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goNext}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: [{ translateY: -25 }],
              padding: 10,
              borderRadius: 25,
              backgroundColor: "#dfdfdf44",
            }}
          >
            {isRtl ? (
              <SimpleLineIcons name="arrow-left" />
            ) : (
              <SimpleLineIcons name="arrow-right" />
            )}
          </TouchableOpacity>
        </View>

        {/* <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
          containerStyle={{ gap: 9, marginTop: 10 }}
          onPress={onPressPagination}
        /> */}
      </View>
    </View>
  );
}

export default App;
