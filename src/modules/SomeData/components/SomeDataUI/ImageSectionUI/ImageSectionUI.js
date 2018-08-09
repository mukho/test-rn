// @flow
import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './ImageSectionUI.styles';

type PropsType = {
  title: string,
  width: string,
  url: string,
  height: string
};
// eslint-disable-next-line react/prefer-stateless-function
class ImageSectionUI extends PureComponent<PropsType> {
  render() {
    const {
      title, url, width, height,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>
          {title}
        </Text>
        <Image
          source={{ uri: url }}
          style={[styles.image, {
            height: parseInt(height, 10),
            width: parseInt(width, 10),
          }]}
        />
      </View>
    );
  }
}

export default ImageSectionUI;
