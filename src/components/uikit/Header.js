import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

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
    ...ifIphoneX(
      {
        height: 90,
      },
      {
        height: 116,
      },
    ),
    justifyContent: 'center',
    paddingLeft: 22,
    position: 'relative',
    // shadowColor: '#000',
    // textShadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
  },

  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 50,
      },
    ),
  },
});

export {Header};
