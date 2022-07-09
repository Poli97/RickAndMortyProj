import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Character, Location} from 'rickmortyapi/dist/interfaces';
import {Backend} from '../../communications';
import {RoundImage} from '../../components';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from '../../routes/stackRouteList';

export type DetailScreenParams = {
  id?: number;
};

interface Props {
  navigation: StackNavigationProp<StackNavigatorRoutes.Detail>;
  route: StackRouteProp<StackNavigatorRoutes.Detail>;
}

const DetailScreen = ({route}: Props) => {
  const id = route.params.id || 1;
  const [characterInfo, setCharacterInfo] = useState(
    undefined as Character | undefined,
  );
  const [locationInfo, setLocationInfo] = useState(
    undefined as Location | undefined,
  );
  const [originInfo, setOriginInfo] = useState(
    undefined as Location | undefined,
  );

  useEffect(() => {
    _getAllCharacterInfos(id);
  }, [id]);

  const _getAllCharacterInfos = async (charId: number) => {
    try {
      const charInfos = await Backend.Character.getCharacterById(charId);
      setCharacterInfo(charInfos);

      if (charInfos) {
        const url = charInfos.location.url;
        if (url) {
          const location = await Backend.Location.getLocationByUrl(url);
          setLocationInfo(location);
        } else {
          console.log('Unknown location');
        }
      }

      if (charInfos) {
        const url = charInfos.origin.url;
        if (url) {
          const origin = await Backend.Location.getOriginByUrl(url);
          setOriginInfo(origin);
        } else {
          console.log('Unknown location');
        }
      }

      if (charInfos) {
        await Backend.Chapter.getChaptersNameByUrls(charInfos.episode);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <Text>Dettaglio: {id}</Text>
      {characterInfo && <RoundImage image={characterInfo.image} size={50} />}
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
