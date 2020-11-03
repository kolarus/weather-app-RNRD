import React, {useState, useContext} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import COLORS from 'src/shared/constants/colors';
import TextWithSuperscript, {
  SUPER_SCRIPT_POSITION,
} from 'src/shared/components/text-with-superscript';
import AuthContext from 'src/core/auth/auth-context';

import styles from './styles';
import SettingsSlider from './settings-slider';
import {TEMPERATURE_SCALE} from './constants';
import CommonText from '../../shared/components/common-text';

const Settings: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [temperatureScale, setTemperatureScale] = useState(TEMPERATURE_SCALE.CELSIUS);
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
      <View style={styles.scale}>
        <TouchableOpacity onPress={() => setTemperatureScale(TEMPERATURE_SCALE.CELSIUS)}>
          <TextWithSuperscript
            textStyle={[
              styles.scaleText,
              temperatureScale === TEMPERATURE_SCALE.CELSIUS && styles.scaleText__selected,
            ]}
            fontSize={40}
            superScript="o"
            superScriptPosition={SUPER_SCRIPT_POSITION.PRE}>
            C
          </TextWithSuperscript>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => setTemperatureScale(TEMPERATURE_SCALE.FAHRENHEIT)}>
          <TextWithSuperscript
            textStyle={[
              styles.scaleText,
              temperatureScale === TEMPERATURE_SCALE.FAHRENHEIT && styles.scaleText__selected,
            ]}
            fontSize={40}
            superScript="o"
            superScriptPosition={SUPER_SCRIPT_POSITION.PRE}>
            F
          </TextWithSuperscript>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={authContext.signOut}>
        <CommonText style={styles.logout}>Logout</CommonText>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
