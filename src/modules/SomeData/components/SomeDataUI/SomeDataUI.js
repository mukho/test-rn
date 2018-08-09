// @flow

import React from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import { ImageSectionUI } from './ImageSectionUI';
import styles from './SomeDataUI.styles';

const SomeDataUI = ({ onChangeHandler, onSubmitHandler, data }: {
  onChangeHandler: (query: string) => void,
  onSubmitHandler: () => void,
  data: Array<{
    id: string,
    title: string,
    images: {
      fixed_height: {
        width: string,
        url: string,
        height: string
      }
    }
  }>
}) => (
  <ScrollView style={styles.wrapper}>
    <View style={styles.content}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeHandler}
        onSubmitEditing={onSubmitHandler}
      />
    </View>
    <View>
      {
        data.map(({ id, title, images: { fixed_height: fixedHeight } }) => (
          <ImageSectionUI
            key={id}
            title={title}
            fixedHeight={fixedHeight}
          />
        ))
      }
    </View>
  </ScrollView>
);

export default SomeDataUI;
