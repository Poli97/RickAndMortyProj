import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AliveBadge, RoundImage, Spacer} from '../../../components';
import {ICharacterStatus} from '../../../core/interfaces/character.interface';
import {DeviceInfo} from '../../../theme/tenant';

interface Props {
  name: string;
  image: string;
  status: ICharacterStatus;
}

const DetailHead = ({name, image, status}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgePosition}>
        <AliveBadge status={status} position={{top: 10, left: 10}} />
      </View>
      <RoundImage image={image} size={DeviceInfo.deviceWidth / 1.5} />
      <Spacer />
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  );
};

export default DetailHead;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },

  nameStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  badgePosition: {
    position: 'absolute',
    top: 7,
    left: 7,
    zIndex: 10,
  },
});
