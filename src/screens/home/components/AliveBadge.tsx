import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICharacterStatus} from '../../../core/interfaces/character.interface';

interface Props {
  status: ICharacterStatus;
}

const AliveBadge = ({status}: Props) => {
  let bgColor = 'transparent';

  switch (status) {
    case 'Alive':
      bgColor = 'green';
      break;
    case 'Dead':
      bgColor = 'red';
      break;
    case 'unknown':
      bgColor = 'gray';
      break;
  }

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={styles.textStyle}>{status}</Text>
    </View>
  );
};

export default AliveBadge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    backgroundColor: 'red',
    padding: 2,
  },

  textStyle: {
    fontSize: 35,
  },
});
