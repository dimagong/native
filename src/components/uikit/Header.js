import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  const {viewStyle, textStyle, viewShadow} = styles;
  return (
    <View style={viewShadow}>
      <View style={viewStyle}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewShadow: {
    elevation: 7,
    borderWidth: 0,
    borderRadius: 8,
    height: 120,
  },
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 71,
    position: 'relative',
    // shadowColor: '#000',
    // textShadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
  },

  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
  },
});

export {Header};
