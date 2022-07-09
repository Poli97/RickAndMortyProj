import React from 'react';
import {FlexStyle, View} from 'react-native';

interface Props {
  space?: number;
  horizontal?: boolean;
}

const Spacer = ({space = 10, horizontal = false}: Props) => {
  let style: FlexStyle = {
    flexDirection: 'column',
  };

  if (horizontal) {
    style = {
      flexDirection: 'row',
      width: space,
    };
  } else {
    style = {
      flexDirection: 'column',
      height: space,
    };
  }
  return <View style={style} />;
};

export default Spacer;
