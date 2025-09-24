import {
  View,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";

import RestorantSlider from "@/components/ui/home/RestorantSlider";
import CategoriesSlider from "@/components/ui/home/CategoriesSlider";

const Index = () => {
  const { t } = useTranslation();
  const router = useRouter();

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
      <CategoriesSlider />
      <RestorantSlider />
      <View>
        <Text>
          {t(`screens.(tabs).index.horizontal_categories_scroll.title`)}
        </Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test eeeeeeeeeeeeeeeee</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test eeeeeeeeeeeeeeeee</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test eeeeeeeeeeeeeeeee</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test eeeeeeeeeeeeeeeee</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
      <View>
        <Text>test</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: 15,
  },
  btn_searach_container: { width: "100%" },
  btn_searach: {
    width: "100%",
    backgroundColor: colors.gray,
    borderRadius: 10,
  },
  input_search: { paddingHorizontal: 20, fontFamily: "SpaceMonoSemiBold" },
});
export default Index;
