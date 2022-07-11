import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {B} from '../../../components';
import {Theme} from '../../../theme/theme';

interface Props {
  chapters: string[];
}

const Chapters = ({chapters}: Props) => {
  const ChapterRenderer = ({chapter}: {chapter: string}) => {
    return <Text>{chapter}</Text>;
  };

  return (
    <View style={styles.container}>
      <B>Featured chapters:</B>
      <View style={styles.boxStyle}>
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Theme.lightDetailBoxBlue,
    padding: 10,
  },

  boxStyle: {
    paddingLeft: 10,
    paddingTop: 5,
  },
});
