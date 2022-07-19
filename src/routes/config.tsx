import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/Home';
import {StackNavigatorParamsList, StackNavigatorRoutes} from './stackRouteList';
import DetailScreen from '../screens/detail/Detail';

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackNavigatorRoutes.Home} component={HomeScreen} />
      <Stack.Screen
        name={StackNavigatorRoutes.Detail}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}
