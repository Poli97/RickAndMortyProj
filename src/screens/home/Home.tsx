import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {Backend} from '../../communications';
import {ErrorBox, Spacer} from '../../components';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from '../../routes/stackRouteList';
import HomeCharCard from './components/HomeCharCard';

export type HomeScreenParams = undefined;

interface Props {
  navigation: StackNavigationProp<StackNavigatorRoutes.Home>;
  route: StackRouteProp<StackNavigatorRoutes.Home>;
}

const HomeScreen = ({navigation}: Props) => {
  const [characters, setCaracters] = useState([] as Character[] | null);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null as string | null);
  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    _getCharactersList();
  }, []);

  const renderItem = (item: {item: Character}) => {
    return (
      <HomeCharCard
        character={item.item}
        onPress={() =>
          navigation.navigate(StackNavigatorRoutes.Detail, {id: item.item.id})
        }
      />
    );
  };

  const renderSeparator = () => {
    return <Spacer space={30} />;
  };

  const _getCharactersList = () => {
    setLoading(true);
    setCaracters([]);
    setNextPage(null);
    setNextLoading(false);
    Backend.Character.getAllCharacters()
      .then(homeList => {
        console.log('HOME ', homeList);
        setCaracters(homeList.characters);
        setNextPage(homeList.nextPage);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setCaracters(null);
        setNextPage(null);
        setLoading(false);
      });
  };

  const _getNextCharacters = () => {
    console.log('End reached');
    if (nextPage) {
      setNextLoading(true);
      Backend.Character.getAllCharactersByPageUrl(nextPage)
        .then(nextList => {
          console.log('HOME ', nextList);

          setCaracters([...(characters || []), ...nextList.characters]);
          setNextPage(nextList.nextPage);
        })
        .finally(() => {
          setNextLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {characters && (
        <FlatList
          data={characters}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          refreshing={loading}
          onRefresh={_getCharactersList}
          contentContainerStyle={styles.listContainer}
          onEndReached={_getNextCharacters}
        />
      )}
      {!characters && (
        <ErrorBox
          message="An error occured while trying to get the character list."
          secondMessage="Please try again later."
          onPress={_getCharactersList}
        />
      )}
      {nextLoading && <ActivityIndicator animating />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
});
