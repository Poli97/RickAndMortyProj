import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Spacer} from '.';
import {DeviceInfo} from '../theme/tenant';
import {Theme} from '../theme/theme';

interface Props {
  message: string;
  secondMessage?: string;
  onPress?: () => void;
}

const ErrorBox = ({message, secondMessage, onPress}: Props) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.textStyle}>{message}</Text>
      {secondMessage && (
        <>
          <Spacer />
          <Text style={styles.secondTextStyle}>{secondMessage}</Text>
        </>
      )}

      {onPress && <Button title="Retry" onPress={onPress} />}
    </View>
  );
};

export default ErrorBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.errorColor,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: DeviceInfo.deviceWidth * 0.75,
  },

  textStyle: {
    fontSize: 25,
    textAlign: 'center',
  },

  secondTextStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
