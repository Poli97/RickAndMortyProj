import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DetailScreenParams} from '../screens/detail/Detail';
import {HomeScreenParams} from '../screens/home/Home';

export enum StackNavigatorRoutes {
  Home = 'Home',
  Detail = 'Detail',
}

export type StackNavigatorParamsList = {
  [StackNavigatorRoutes.Home]: HomeScreenParams;
  [StackNavigatorRoutes.Detail]: DetailScreenParams;
};

export type StackNavigationProp<
  RouteName extends keyof StackNavigatorParamsList,
> = NativeStackNavigationProp<StackNavigatorParamsList, RouteName>;

export type StackRouteProp<RouteName extends keyof StackNavigatorParamsList> =
  RouteProp<StackNavigatorParamsList, RouteName>;
