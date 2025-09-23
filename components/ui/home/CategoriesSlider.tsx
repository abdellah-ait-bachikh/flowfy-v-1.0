import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { colors } from '@/constants/colors';
import AppText from '@/components/AppText';
import { TouchableOpacity } from 'react-native';
import { cards } from '@/constants/data';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';

const CategoriesSlider = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState(cards);

  useFocusEffect(
    useCallback(() => {
      // 👉 refresh data each time this component gains focus
      // const refreshed = i18n.language !== 'fr' ? cards : [...cards].reverse();
      // setData(refreshed);

      // also scroll reset if needed
      console.log('CategoriesSlider refreshed on focus');

      return () => {
        // optional cleanup
      };
    }, [i18n.language])
  );

  return (
    <View style={styles.horizontal_scroll_container}>
      <View>
        <AppText style={styles.horizontal_scroll_container_title}>
          {t('screens.(tabs).index.categories')}
        </AppText>
      </View>

      <ScrollView
       i18nIsDynamicList={false}
        horizontal
        style={styles.horizontal_scroll}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((card) => (
          <TouchableOpacity
            activeOpacity={0.4}
            key={card.id}
            style={[
              styles.horizontal_scroll_card,
              {
                marginRight: 15,
              },
            ]}
          >
            <Image source={card.image} style={styles.card_img} />
            <View style={styles.horizontal_scroll_card_body}>
              <AppText style={styles.horizontal_scroll_card_body_title}>
                {t(`screens.(tabs).index.horizental_scroll.name.${card.name}`)}
              </AppText>
              <AppText style={styles.horizontal_scroll_card_body_description}>
                {t(
                  `screens.(tabs).index.horizental_scroll.description.${card.name}`
                )}
              </AppText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({ horizontal_scroll_container: { padding: 10, overflow: "hidden", gap: 5, marginTop:10},
  horizontal_scroll_container_title: {
    fontFamily: "SpaceMonoBold",
  },
  horizontal_scroll: {
    height: 120,
    flexDirection: "row",
    gap: 10,
  },
  horizontal_scroll_card: {
    width: 250,
    height: 120,
    backgroundColor: colors.gray_50,
    justifyContent: "flex-start",
    gap: 15,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gray_100,
  },
  card_img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  horizontal_scroll_card_body: { flex: 1, gap: 5 },
  horizontal_scroll_card_body_title: {
    fontSize: 22,
    fontFamily: "SpaceMonoSemiBold",
  },
  horizontal_scroll_card_body_description: {
    fontSize: 10,
    fontFamily: "SpaceMonoSemiBold",
    color: colors.gray_300,
  },})