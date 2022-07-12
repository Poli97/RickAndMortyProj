import React from 'react';
import {Text, View} from 'react-native';
import {Location} from 'rickmortyapi/dist/interfaces';
import {B} from '../../../components';
import {SharedCss} from '../../../theme/sharedCss';

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
    <View style={SharedCss.infoBox}>
      <Text>
        <B>{title}</B> {locationInfo && <B>{locationInfo.name}</B>}
      </Text>

      <View style={SharedCss.dataInInfoBox}>
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
