import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  vr: {
    width: StyleSheet.hairlineWidth,
    height: '40%',

    backgroundColor: '#FFF',
  },
  hr: {
    width: '80%',
    height: StyleSheet.hairlineWidth,

    backgroundColor: '#FFF',
  },
});

export const VR = () => <View style={styles.vr} />;

export const HR = () => <View style={styles.hr} />;
