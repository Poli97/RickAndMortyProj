import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {B, Spacer} from '../../../components';
import {DeviceInfo} from '../../../theme/tenant';
import {Theme} from '../../../theme/theme';
import AliveBadge from './AliveBadge';

interface Props {
  character: Character;
  onPress: () => void;
}

const HomeCharCard = ({character, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AliveBadge status={character.status} />
        <Image source={{uri: character.image}} style={styles.image} />
        <Spacer />
        <View style={{alignItems: 'center'}}>
          <B>{character.name}</B>
        </View>

        <View style={{padding: 10}}>
          <Text>
            <B>Species: </B>
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
      </View>
    </TouchableOpacity>
  );
};

export default HomeCharCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    width: DeviceInfo.deviceWidth * 0.8,
    borderColor: Theme.hardDetailBoxBlue,
    borderRadius: 15,
  },

  image: {
    width: DeviceInfo.deviceWidth * 0.8 - 4,
    height: DeviceInfo.deviceWidth * 0.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
