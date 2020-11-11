import React, {useCallback, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, connect} from 'react-redux';
import {setIsUserAuthorized} from 'src/core/redux/actions/user';
import COLORS from 'src/shared/constants/colors';
import TextWithSuperscript, {
  SUPER_SCRIPT_POSITION,
} from 'src/shared/components/text-with-superscript';
import {setShowWeatherFor, setUnits} from 'src/core/redux/actions/user';

import styles from './styles';
import SettingsSlider from './settings-slider';
import {UNITS} from './constants';
import CommonText from '../../shared/components/common-text';
import {RootState} from '../../core/redux/types';

interface Props {
  showWeatherFor: number;
  units: string;
}

const Settings: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mins, setMins] = useState(5);

  const handleSetShowWeatherFor = useCallback(
    (numberOfDays) => {
      dispatch(setShowWeatherFor(numberOfDays));
    },
    [dispatch],
  );

  const handleSetUnitsToMetric = useCallback(() => {
    dispatch(setUnits(UNITS.METRIC));
  }, [dispatch]);

  const handleSetUnitsToImperial = useCallback(() => {
    dispatch(setUnits(UNITS.IMPERIAL));
  }, [dispatch]);

  const handleUserLogout = useCallback(() => {
    dispatch(setIsUserAuthorized(false));
  }, [dispatch]);

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
        from={1}
        to={5}
        value={props.showWeatherFor}
        onValueChange={handleSetShowWeatherFor}
        staticLabel="show weather for">
        {props.showWeatherFor} days
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
        <TouchableOpacity onPress={handleSetUnitsToMetric}>
          <TextWithSuperscript
            textStyle={[
              styles.scaleText,
              props.units === UNITS.METRIC && styles.scaleText__selected,
            ]}
            fontSize={40}
            superScript="o"
            superScriptPosition={SUPER_SCRIPT_POSITION.PRE}>
            C
          </TextWithSuperscript>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity onPress={handleSetUnitsToImperial}>
          <TextWithSuperscript
            textStyle={[
              styles.scaleText,
              props.units === UNITS.IMPERIAL && styles.scaleText__selected,
            ]}
            fontSize={40}
            superScript="o"
            superScriptPosition={SUPER_SCRIPT_POSITION.PRE}>
            F
          </TextWithSuperscript>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleUserLogout}>
        <CommonText style={styles.logout}>Logout</CommonText>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  showWeatherFor: state.user.settings.showWeatherFor,
  units: state.user.settings.units,
});

export default connect(mapStateToProps)(Settings);
