import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export type DetailScreenParams = {
  id?: string;
};

const DetailScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Dettaglio</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
