import {  Text, View } from "react-native";
import { useTranslation } from "react-i18next";

const Bag = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";
  return (
    <View style={{ display: "flex",backgroundColor: "transparent" ,flex:1 }}>

      <Text> {t("screens.(tabs).bag.title")} </Text>
    </View>
   
  );
};

export default Bag;
