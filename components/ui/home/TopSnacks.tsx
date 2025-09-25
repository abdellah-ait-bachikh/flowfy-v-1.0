import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { topSnacks } from "@/constants/data";
import { colors } from "@/constants/colors";
import AppText from "@/components/AppText";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";
import defaultSnackImg from "@/assets/images/flowfy-border-r-removed.png";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 180;
const GAP = 10;

const TopSnacks = () => {
  const { t, i18n } = useTranslation("");
  const isRtl = i18n.language === "ar";

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <AppText style={styles.title}>
          {t(`screens.(tabs).index.top_snackes.title`)}
        </AppText>
        <View style={styles.moreWrapper}>
          <AppText style={styles.more}>
            {t(`screens.(tabs).index.top_snackes.more`)}
          </AppText>
          {isRtl ? (
            <AntDesign name="arrow-left" />
          ) : (
            <AntDesign name="arrow-right" />
          )}
        </View>
      </View>

      <FlatList
        data={topSnacks}
        numColumns={Math.floor(width / ITEM_WIDTH)} // 👈 auto number of cols
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Image
                source={item.image || defaultSnackImg}
                style={styles.image}
              />
              <AppText style={styles.name}>{item.name}</AppText>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontFamily: "SpaceMonoBold",
    fontSize: 17,
  },
  moreWrapper: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  more: {
    fontFamily: "SpaceMonoBold",
    fontSize: 12,
  },
  list: {
    justifyContent: "center",
  },
  cardWrapper: {
    width: ITEM_WIDTH,
    padding: GAP / 2,
    margin: "auto",
  },
  card: {
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.gray_50,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150, // adjust as needed
    resizeMode: "cover",
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default TopSnacks;
