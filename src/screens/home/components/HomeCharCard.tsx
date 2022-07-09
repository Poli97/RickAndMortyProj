import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';

interface Props {
  character: Character;
}

const HomeCharCard = ({character}: Props) => {
  return (
    <View>
      <Image source={{uri: character.image}} style={{width: 50, height: 50}} />
      <Text>{character.name}</Text>
    </View>
  );
};

export default HomeCharCard;

const styles = StyleSheet.create({});
