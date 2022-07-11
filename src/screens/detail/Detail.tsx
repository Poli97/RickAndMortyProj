import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Character, Location} from 'rickmortyapi/dist/interfaces';
import {Backend} from '../../communications';
import {Spacer} from '../../components';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from '../../routes/stackRouteList';
import Chapters from './components/Chapters';
import DetailHead from './components/DetailHead';
import DetailInfo from './components/DetailInfo';
import LocationInfo from './components/LocationInfo';

export type DetailScreenParams = {
  id: number;
};

interface Props {
  navigation: StackNavigationProp<StackNavigatorRoutes.Detail>;
  route: StackRouteProp<StackNavigatorRoutes.Detail>;
}

interface ILocation {
  location: Location | undefined;
  isKnown: boolean;
}

const DetailScreen = ({route}: Props) => {
  const id = route.params.id;

  const [loading, setLoading] = useState(true);
  const [characterInfo, setCharacterInfo] = useState(
    undefined as Character | undefined,
  );
  const [lastSeenInfo, setLastSeenInfo] = useState(
    undefined as ILocation | undefined,
  );
  const [originInfo, setOriginInfo] = useState(
    undefined as ILocation | undefined,
  );
  const [chaptersNames, setChaptersNames] = useState([] as string[]);

  useEffect(() => {
    _getAllCharacterInfos(id);
  }, [id]);

  const _getAllCharacterInfos = async (charId: number) => {
    setLoading(true);
    try {
      const charInfos = await Backend.Character.getCharacterById(charId);
      setCharacterInfo(charInfos);

      if (charInfos) {
        const url = charInfos.location.url;
        if (url) {
          const location = await Backend.Location.getLocationByUrl(url);
          setLastSeenInfo({location: location, isKnown: true});
        } else {
          console.log('Unknown last location');
          setLastSeenInfo({location: undefined, isKnown: false});
        }
      }

      if (charInfos) {
        const url = charInfos.origin.url;
        if (url) {
          const origin = await Backend.Location.getLocationByUrl(url);
          setOriginInfo({location: origin, isKnown: true});
        } else {
          console.log('Unknown origin');
          setOriginInfo({location: undefined, isKnown: false});
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollContainer}>
        {loading && <ActivityIndicator size={'large'} />}
        {!loading && (
          <>
            {characterInfo && (
              <>
                <DetailHead
                  image={characterInfo.image}
                  name={characterInfo.name}
                  status={characterInfo.status}
                />

                <Spacer />

                <DetailInfo info={characterInfo} />

                <Spacer />

                {originInfo && (
                  <LocationInfo
                    locationType="origin"
                    locationInfo={originInfo.location}
                    isKnown={originInfo.isKnown}
                  />
                )}

                <Spacer />

                {lastSeenInfo && (
                  <LocationInfo
                    locationType="lastSeen"
                    locationInfo={lastSeenInfo.location}
                    isKnown={lastSeenInfo.isKnown}
                  />
                )}

                <Spacer />

                {chaptersNames && <Chapters chapters={chaptersNames} />}
              </>
            )}
          </>
        )}
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
