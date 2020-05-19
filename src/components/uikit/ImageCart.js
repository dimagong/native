import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {w} from '../../../constans';

const ImageCart = ({item}) => {
  const {id, name, year, image, info} = item;
  const {h1, cover, container, sub} = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: `${image}`}} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
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
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
    backgroundColor: 'gold',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

export {ImageCart};

//source={{uri: 'https://picsum.photos/200/300?random=1'}}
