// @flow
import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './ImageSectionUI.styles';

type PropsType = {
  title: string,
  fixedHeight: {
    width: string,
    url: string,
    height: string
  }
};
// eslint-disable-next-line react/prefer-stateless-function
class ImageSectionUI extends PureComponent<PropsType> {
  render() {
    const { title, fixedHeight } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>
          {title}
        </Text>
        <Image
          source={{ uri: fixedHeight.url }}
          style={[styles.image, {
            height: parseInt(fixedHeight.height, 10),
            width: parseInt(fixedHeight.width, 10),
          }]}
        />
      </View>
    );
  }
}

export default ImageSectionUI;
