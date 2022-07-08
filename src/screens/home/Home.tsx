import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from '../../routes/stackRouteList';

export type HomeScreenParams = undefined;

interface Props {
  navigation: StackNavigationProp<StackNavigatorRoutes.Home>;
  route: StackRouteProp<StackNavigatorRoutes.Home>;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>Prova</Text>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate(StackNavigatorRoutes.Detail, {});
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
