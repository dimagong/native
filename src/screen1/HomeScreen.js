import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {ImageCard, Header, Layout} from '../components/uikit';
import {STARGATE_DETAILS} from '../routes';

const url =
  //'http://api.tvmaze.com/search/shows?q=girls';
  'http://api.tvmaze.com/search/shows?q=stargite';
//https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data);
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({data});
    } catch (error) {
      throw error;
    }
  };

  render() {
    const {title, data} = this.state;
    const {navigation} = this.props;
    console.log('this.props Screen1', this.props);
    //console.log('navigation', navigation);
    //const {cart} = styles;
    console.log('state', this.state);
    return (
      <View>
        <Header
          title={title}
          leftIcon="ios-menu"
          leftColor="#fff"
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <Layout>
            {data.map(item => {
              return (
                <ImageCard
                  item={item.show}
                  key={item.show.id}
                  //onPress={() => console.log('onPress')}
                  onPress={() =>
                    navigation.navigate(STARGATE_DETAILS, item.show)
                  }
                />
              );
            })}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
