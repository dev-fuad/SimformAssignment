import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { vw } from '../../utilities/Dimensions';

const styles = StyleSheet.create({
  container: {
    width: vw(80),
    height: vw(12),
    borderRadius: vw(6),
    marginVertical: vw(5),

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#0004',
  },
  title: {
    fontSize: 16,
    color: '#FFF',
  },
});

const Button = ({ title, onPress, style, titleStyle }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
