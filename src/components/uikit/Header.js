import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {w} from '../../../constans';

const Header = ({title, onPress, leftIcon, leftColor, detail}) => {
  const {viewStyle, textStyle, viewShadow, leftButtonStyle} = styles;
  return (
    <View style={viewShadow}>
      <View style={viewStyle}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name={leftIcon}
            style={[leftButtonStyle, {paddingLeft: detail ? 10 : 20}]}
            color={leftColor}
          />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[textStyle, {paddingLeft: leftIcon ? 25 : 0}]}>
          {title}
        </Text>
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
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    ...ifIphoneX(
      {
        height: 90,
      },
      {
        height: 116,
      },
    ),
    // justifyContent: 'center',
    paddingLeft: 22,
    position: 'relative',
    // shadowColor: '#000',
    // textShadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
  },

  textStyle: {
    color: '#fff',
    width: w - 100,
    fontSize: 28,
    fontWeight: 'bold',
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

  leftButtonStyle: {
    fontSize: 40,
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
