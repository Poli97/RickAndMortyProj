import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {Character, Location} from 'rickmortyapi/dist/interfaces';
import {Backend} from '../../communications';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from '../../routes/stackRouteList';
import DetailHead from './components/DetailHead';
import DetailInfo from './components/DetailInfo';
import LocationInfo from './components/LocationInfo';

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
  const [lastSeenInfo, setLastSeenInfo] = useState(
    undefined as Location | undefined,
  );
  const [originInfo, setOriginInfo] = useState(
    undefined as Location | undefined,
  );
  const [chaptersNames, setChaptersNames] = useState([] as string[]);

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
          setLastSeenInfo(location);
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
        const chaptersN = await Backend.Chapter.getChaptersNamesByUrls(
          charInfos.episode,
        );
        setChaptersNames(chaptersN);
      }
    } catch (err) {
      console.log('_getAllCharacterInfos ERROR ', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollContainer}>
        {characterInfo && (
          <>
            <DetailHead image={characterInfo.image} name={characterInfo.name} />
            <DetailInfo info={characterInfo} />
          </>
        )}

        {originInfo && (
          <LocationInfo locationType="origin" originInfo={originInfo} />
        )}

        {lastSeenInfo && (
          <LocationInfo locationType="lastSeen" originInfo={lastSeenInfo} />
        )}

        {chaptersNames.map(n => (
          <Text>{n}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  safeContainer: {
    alignItems: 'center',
    flex: 1,
  },

  scrollContainer: {
    width: '95%',
  },
});
