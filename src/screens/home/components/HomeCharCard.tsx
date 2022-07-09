import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';

interface Props {
  character: Character;
  onPress: () => void;
}

const HomeCharCard = ({character, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: character.image}} style={styles.image} />
      <Text>{character.name}</Text>
    </TouchableOpacity>
  );
};

export default HomeCharCard;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
