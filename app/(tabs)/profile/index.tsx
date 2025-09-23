import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { user } from "@/constants/data";
import LinearGradientCmp from "@/components/ui/LinearGradientCmp";

const ProfileDetails = () => {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace(`/profile/${21}`);
    }
  }, []);
  if (user) return null;
  return (
    <View style={{ display: "flex",backgroundColor: "transparent" ,flex:1 }}>
      <Text>Profile default</Text>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
