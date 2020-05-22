import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {ImageCart, Header, Layout} from './src/components/uikit';

const url =
  //'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';
  'http://api.tvmaze.com/search/shows?q=stargite';

class App extends Component {
  state = {
    title: 'STAR GITE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('response', response);
      console.log('data', data);
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({data});
    } catch (error) {
      throw error;
    }
  };

  render() {
    const {title, data} = this.state;
    //const {cart} = styles;
    console.log('state', this.state);
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => {
              return <ImageCart item={item} key={item.id} />;
            })}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

export default App;

// const App = () => {
//   const [count, nextCount] = useState(0);

//   return (
//     <View style={styles.component}>
//       <Text style={styles.text}>Clicks</Text>
//       <Text style={styles.count}>{count}</Text>
//       <Button title="Button" onPress={() => nextCount(count + 1)} />
//     </View>
//   );
// };
