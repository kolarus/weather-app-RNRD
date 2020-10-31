import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import COLORS from 'src/shared/constants/colors';
import styles from './styles';

const FullscreenLoader: React.FC = () => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color={COLORS.LOADER_COLOR} />
  </View>
);

export default FullscreenLoader;
