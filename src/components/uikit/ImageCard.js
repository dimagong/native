import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {w} from '../../../constans';

const ImageCard = ({item, onPress}) => {
  const {name, image} = item;
  const {h1, cover, container, sub} = styles;
  const img = `https${image.medium.slice(4)}`;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{uri: `${img}`}} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: w / 2.1,
    paddingVertical: 10,
    //backgroundColor: 'gold',
    marginBottom: 10,
  },
  sub: {
    borderWidth: 0,
    borderRadius: 8,
    elevation: 1,
    width: w / 2.32,
    backgroundColor: 'white',

    // shadowColor: '#000',
    // shadowRadius: 8,
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.8,
  },
  h1: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
    marginTop: 10,
    lineHeight: 30,
    //backgroundColor: 'gold',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

export {ImageCard};

//source={{uri: 'https://picsum.photos/200/300?random=1'}}
