import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  children: string;
}

const B = ({children}: Props) => (
  <Text style={styles.textBold}>{children}</Text>
);

export default B;

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
  },
});
