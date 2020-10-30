import React from 'react';
import {View} from 'react-native';
import CommonText from 'src/shared/components/common-text';
import styles from './styles';

const Settings: React.FC = () => {
  return (
    <View style={styles.root}>
      <CommonText>Settings</CommonText>
    </View>
  );
};

export default Settings;
