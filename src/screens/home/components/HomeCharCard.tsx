import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {B} from '../../../components';
import {deviceWidth} from '../../../theme/tenant';

interface Props {
  character: Character;
  onPress: () => void;
}

const HomeCharCard = ({character, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: character.image}} style={styles.image} />
        <Text>{character.name}</Text>
        <Text>
          {character.species} {character.type ? '- ' + character.type : ''}
        </Text>
        <Text>
          <B>Origin: </B>
          {character.origin.name}
        </Text>
        <Text>
          <B>Last known location: </B>
          {character.location.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCharCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: deviceWidth * 0.8,
  },

  image: {
    width: deviceWidth * 0.8 - 2,
    height: deviceWidth * 0.8,
  },
});
