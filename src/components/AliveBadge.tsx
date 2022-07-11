import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICharacterStatus} from '../core/interfaces/character.interface';

interface Props {
  status: ICharacterStatus;
  position: {
    top: number;
    left: number;
  };
}

const AliveBadge = ({status, position}: Props) => {
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
    default:
      bgColor = 'transparent';
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor, top: position.top, left: position.left},
      ]}>
      <Text style={styles.textStyle}>{status}</Text>
    </View>
  );
};

export default AliveBadge;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 10,
  },

  textStyle: {
    fontSize: 35,
  },
});
