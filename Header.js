//import type { Node } from 'react';
//import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';
import React from 'react';

//const Header = ({name}): Node => (
const Header = ({name}) => (
  <View style={styles.conainer}>
    <Text style={styles.text}>React Native </Text>
    <Text style={styles.text}> Learn Tuday</Text>
    <Text style={styles.text}>HELLO {name}</Text>
    <Text style={styles.text}>HELLO!!!!</Text>
  </View>
);

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    alignSelf: 'flex-end',
  },
});

export default Header;
