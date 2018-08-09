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
    height: string,
    width: string,
    url: string
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
        data.map(({
          id, title, height, width, url,
        }) => (
          <ImageSectionUI
            key={id}
            title={title}
            height={height}
            width={width}
            url={url}
          />
        ))
      }
    </View>
  </ScrollView>
);

export default SomeDataUI;
