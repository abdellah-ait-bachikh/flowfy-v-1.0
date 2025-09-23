import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/colors";
import { useFocusEffect } from "@react-navigation/native";
import AppText from "@/components/AppText";

const Search = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";
  const inputRef = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      return () => {
        clearTimeout(timer);
        inputRef.current?.blur();
      };
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.btn_searach_container}>
        <View style={styles.btn_searach}>
          <TextInput
            ref={inputRef}
            style={[
              styles.input_search,
              {
                textAlign: i18n.language === "ar" ? "right" : "left",
                writingDirection: i18n.language === "ar" ? "rtl" : "ltr",
              },
            ]}
            
            placeholder={t("screens.(tabs).search.btn_search_placehaulder")}
            // autoFocus={true}
          />
        </View>
        <AppText>{t("screens.(tabs).search.title")} </AppText>
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
  input_search: { paddingHorizontal: 20 ,fontFamily: "SpaceMono"},
});
export default Search;
