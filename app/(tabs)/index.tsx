import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index zddsssssssssssssssssss</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color:colors.gray,
    backgroundColor:"white"
  },
});
