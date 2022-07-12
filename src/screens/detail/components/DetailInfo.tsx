import React from 'react';
import {Text, View} from 'react-native';
import {Character} from 'rickmortyapi/dist/interfaces';
import {B} from '../../../components';
import {SharedCss} from '../../../theme/sharedCss';

interface Props {
  info: Character;
}

const DetailInfo = ({info}: Props) => {
  return (
    <View style={SharedCss.infoBox}>
      <B>Infos: </B>
      <View style={SharedCss.dataInInfoBox}>
        <Text>
          <B>Gender: </B>
          {info.gender}
        </Text>
        <Text>
          <B>Species: </B>
          {info.species}
        </Text>
        <Text>
          <B>Type: </B>
          {info.type ? info.type : 'unspecified'}
        </Text>
      </View>
    </View>
  );
};

export default DetailInfo;
