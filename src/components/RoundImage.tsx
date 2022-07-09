import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  image: string;
  size: number;
}

const RoundImage = ({image, size}: Props) => {
  const borderRadius = Math.floor(size / 2);

  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: borderRadius,
        ...styles.roundImage,
      }}
      source={{uri: image}}
    />
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  roundImage: {
    borderColor: 'black',
    borderWidth: 0.5,
  },
});
