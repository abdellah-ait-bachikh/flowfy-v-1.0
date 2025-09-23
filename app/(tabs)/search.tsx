import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";


const search = () => {
    const { t, i18n } = useTranslation();
    const rtl = i18n.language === "ar";
  return (
     <View style={{ display: "flex",backgroundColor: "transparent" ,flex:1 }}>
      <Text>{t("screens.(tabs).search.title")} </Text>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
