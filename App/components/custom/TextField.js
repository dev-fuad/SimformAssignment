import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { vw } from '../../utilities/Dimensions';

const styles = StyleSheet.create({
  input: {
    width: vw(80),
    height: vw(12),

    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,

    color: '#FFF',
    fontSize: 16,
  },
});

const TextField = ({ style, ...other }) => (
  <TextInput
    style={[styles.input, style]}
    underlineColorAndroid={'#0000'}
    {...other}
  />
);

export default TextField;
