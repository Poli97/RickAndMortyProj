import {StyleSheet} from 'react-native';
import {Theme} from './theme';

export const SharedCss = StyleSheet.create({
  infoBox: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Theme.lightDetailBoxBlue,
    padding: 10,
  },

  dataInInfoBox: {
    paddingLeft: 10,
    paddingTop: 5,
  },
});
