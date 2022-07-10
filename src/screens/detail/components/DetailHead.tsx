import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RoundImage, Spacer} from '../../../components';
import {DeviceInfo} from '../../../theme/tenant';

interface Props {
  name: string;
  image: string;
}

const DetailHead = ({name, image}: Props) => {
  return (
    <View style={styles.container}>
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
});
