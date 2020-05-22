import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {w} from '../../../constans';

const ImageBigCard = ({data}) => {
  const {image} = data;
  const {cover, container, sub} = styles;
  const img = `https${image.medium.slice(4)}`;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: `${img}`}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'gold',
    marginBottom: 10,
  },
  sub: {
    borderWidth: 0,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: 'white',

    // shadowColor: '#000',
    // shadowRadius: 8,
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.8,
  },
  cover: {
    width: w / 1.67,
    height: w * 0.9,
    borderRadius: 10,
  },
});

export {ImageBigCard};

//source={{uri: 'https://picsum.photos/200/300?random=1'}}
