import React from "react";
import { View, Button, StyleSheet } from "react-native";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = async (lng: string) => {
    try {
      await i18next.changeLanguage(lng);
      await AsyncStorage.setItem("user-language", lng);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <View style={styles.container}>
      {languages.map(({ code, label }) => (
        <Button key={code} title={label} onPress={() => changeLanguage(code)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});
