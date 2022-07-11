import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Location} from 'rickmortyapi/dist/interfaces';
import {B} from '../../../components';
import {Theme} from '../../../theme/theme';

interface Props {
  locationType: 'origin' | 'lastSeen';
  locationInfo: Location | undefined;
  isKnown: boolean;
}

const LocationInfo = ({locationType, locationInfo, isKnown}: Props) => {
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
      <Text>
        <B>{title}</B> {locationInfo && <B>{locationInfo.name}</B>}
      </Text>

      <View style={styles.boxStyle}>
        {locationInfo && isKnown && (
          <>
            <Text>
              <B>Type: </B>
              {locationInfo.type}
            </Text>
            <Text>
              <B>Dimension: </B> {locationInfo.dimension}
            </Text>
            <Text>
              <B>Residents: </B> {locationInfo.residents.length}
            </Text>
          </>
        )}
        {!isKnown && (
          <>
            <Text>Location Unknown</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Theme.lightDetailBoxBlue,
    padding: 10,
  },

  titleStyle: {
    fontWeight: 'bold',
  },

  boxStyle: {
    paddingLeft: 10,
    paddingTop: 5,
  },
});
