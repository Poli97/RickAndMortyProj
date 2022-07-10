import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Location} from 'rickmortyapi/dist/interfaces';
import {detailBoxBlue} from '../../../theme/tenant';

interface Props {
  locationType: 'origin' | 'lastSeen';
  originInfo: Location;
}

const LocationInfo = ({locationType, originInfo}: Props) => {
  let title = '';

  switch (locationType) {
    case 'lastSeen':
      title = 'Last known location:';
      break;
    case 'origin':
      title = 'Origin location:';
      break;
    default:
      title = 'Location Info';
      break;
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{originInfo.name}</Text>
      <Text>Type: {originInfo.type}</Text>
      <Text>Dimension: {originInfo.dimension}</Text>
      <Text>Residents: {originInfo.residents.length}</Text>
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: detailBoxBlue,
    padding: 10,
  },
});
