import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {Backend} from '../../communications';
import {Spacer} from '../../components';
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
  const [characters, setCaracters] = useState([] as Character[]);
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
        setCaracters([]);
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

          setCaracters([...characters, ...nextList.characters]);
          setNextPage(nextList.nextPage);
        })
        .finally(() => {
          setNextLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Spacer space={40} />}
        refreshing={loading}
        onRefresh={_getCharactersList}
        contentContainerStyle={styles.listContainer}
        onEndReached={_getNextCharacters}
      />
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
  },
});
