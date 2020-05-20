import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const Layout = props => {
  const {cart} = styles;
  return (
    <ScrollView>
      <View style={cart}>{props.children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cart: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: 150,
  },
});

export {Layout};
