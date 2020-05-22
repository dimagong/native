import React, {PureComponent} from 'react';
import {ScrollView, Platform, StyleSheet, Text, View} from 'react-native';
import {ImageCard, Header, Layout, ImageBigCard} from '../components/uikit';
//import Icon from 'react-native-vector-icons/FontAwesome';

class DetailScreen extends PureComponent {
  // state = {  }

  render() {
    const {image, name, summary} = this.props.route.params;
    const {navigation} = this.props;
    const {container, h1, h2, sub} = styles;
    const data = {image};
    //console.log('this.props DetailScreen', this.props);
    //console.log('this.props DetailScreen', this.props.route.params);
    return (
      <View style={container}>
        <Header
          detail
          title={name.toUpperCase()}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>
              {summary ? summary.replace(/<[^>]+>/g, '') : 'SORRY, NO SUMMARY'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
  h1: {
    fontFamily: 'Roboto',
    fontSize: 40,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Roboto',
    fontSize: 22,
    padding: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});

export default DetailScreen;

/* <Text>
          <Icon name="rocket" size={60} color="#900" />
        </Text> */
