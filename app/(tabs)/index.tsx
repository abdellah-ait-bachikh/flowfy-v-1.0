import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
 

  return (
   <ScrollView style={{ display: "flex",backgroundColor: "transparent" ,flex:1, }}>
      <Text>{t("screens.(tabs).index.title")}</Text>
   </ScrollView>
  );
};

export default Index;
