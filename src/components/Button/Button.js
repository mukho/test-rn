// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './Button.styles';

const Button = ({ text }: {
  text: string
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
);

export default Button;
