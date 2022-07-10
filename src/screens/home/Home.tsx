import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
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
    Backend.Character.getAllCharacters()
      .then(chars => {
        console.log('HOME ', chars);
        setCaracters(chars);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setCaracters([]);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={characters}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Spacer space={40} />}
        refreshing={loading}
        onRefresh={_getCharactersList}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
