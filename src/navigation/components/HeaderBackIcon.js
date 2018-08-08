// @flow
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from '../navigation.styles';

const HeaderBackIcon = ({ clickAction }: {
  clickAction: () => void
}) => (
  <TouchableOpacity onPress={clickAction} activeOpacity={0.6}>
    <Image
      style={styles.headerBackIcon}
      source={require('./assets/backArrow.png')}
    />
  </TouchableOpacity>
);

export default HeaderBackIcon;
