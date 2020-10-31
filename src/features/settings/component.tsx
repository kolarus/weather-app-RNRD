import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import COLORS from 'src/shared/constants/colors';
import SettingsSlider from './settings-slider';

const Settings: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [days, setDays] = useState(100);
  const [mins, setMins] = useState(5);

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={COLORS.TEXT_DEFAULT}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={COLORS.TEXT_DEFAULT}
        value={age}
        onChangeText={setAge}
      />
      <SettingsSlider
        style={styles.daysSlider}
        step={1}
        from={0}
        to={365}
        value={days}
        onValueChange={setDays}
        staticLabel="show weather for">
        {days} days
      </SettingsSlider>
      <SettingsSlider
        style={styles.minsSlider}
        step={5}
        from={0}
        to={60}
        value={mins}
        onValueChange={setMins}
        staticLabel="update weather every">
        {mins} mins
      </SettingsSlider>
    </View>
  );
};

export default Settings;
