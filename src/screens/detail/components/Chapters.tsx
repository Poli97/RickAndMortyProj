import React from 'react';
import {Text, View} from 'react-native';
import {IEpisodeClient} from '../../../communications/chapters/chapters.interface';
import {B} from '../../../components';
import {SharedCss} from '../../../theme/sharedCss';

interface Props {
  chapters: IEpisodeClient[];
}

const Chapters = ({chapters}: Props) => {
  const ChapterRenderer = ({chapter}: {chapter: IEpisodeClient}) => {
    return (
      <Text>
        <B>{chapter.episode + ': '}</B>
        {chapter.name}
      </Text>
    );
  };

  return (
    <View style={SharedCss.infoBox}>
      <B>Featured chapters:</B>
      <View style={SharedCss.dataInInfoBox}>
        {chapters.map((chapter, index) => (
          <ChapterRenderer
            key={`${chapter}_${index.toString()}`}
            chapter={chapter}
          />
        ))}
      </View>
    </View>
  );
};

export default Chapters;
