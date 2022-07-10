import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {detailBoxBlue} from '../../../theme/tenant';

interface Props {
  chapters: string[];
}

const Chapters = ({chapters}: Props) => {
  const ChapterRenderer = ({
    chapter,
    idKey,
  }: {
    chapter: string;
    idKey: string;
  }) => {
    return <Text key={idKey}>{chapter}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text>Featured chapters:</Text>
      {chapters.map((chapter, index) => (
        <ChapterRenderer idKey={chapter + index} chapter={chapter} />
      ))}
    </View>
  );
};

export default Chapters;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: detailBoxBlue,
    padding: 10,
  },
});
