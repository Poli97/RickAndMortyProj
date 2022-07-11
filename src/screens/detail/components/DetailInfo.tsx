import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {B} from '../../../components';
import {Theme} from '../../../theme/theme';

interface Props {
  info: Character;
}

const DetailInfo = ({info}: Props) => {
  return (
    <View style={styles.container}>
      <Text>
        <B>Gender: </B>
        {info.gender}
      </Text>
      <Text>
        <B>Species: </B>
        {info.species}
      </Text>
      <Text>
        <B>Type: </B>
        {info.type ? info.type : 'unspecified'}
      </Text>
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
