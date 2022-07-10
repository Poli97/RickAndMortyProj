import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {Theme} from '../../../theme/theme';

interface Props {
  info: Character;
}

const DetailInfo = ({info}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Gender: {info.gender}</Text>
      <Text>Species: {info.species}</Text>
      <Text>Type: {info.type}</Text>
      <Text>Status: {info.status}</Text>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Theme.lightDetailBoxBlue,
    padding: 10,
  },
});
