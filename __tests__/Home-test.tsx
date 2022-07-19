import React from 'react';
import HomeScreen from '../src/screens/home/Home';

jest.useFakeTimers();

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  StackNavigationProp,
  StackNavigatorRoutes,
  StackRouteProp,
} from 'src/routes/stackRouteList';

const navigation = {
  navigate: jest.fn(),
} as unknown as StackNavigationProp<StackNavigatorRoutes.Home>;

const route = {} as StackRouteProp<StackNavigatorRoutes.Home>;

it('renders correctly', () => {
  const tree = renderer.create(
    <HomeScreen navigation={navigation} route={route} />,
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
