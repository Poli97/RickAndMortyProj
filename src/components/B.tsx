import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  children: string;
  center?: boolean;
}

const B = ({children, center = false}: Props) => (
  <Text style={[styles.textBold, center && styles.centerStyle]}>
    {children}
  </Text>
);

export default B;

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
  },

  centerStyle: {
    textAlign: 'center',
  },
});
