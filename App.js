import React, {useState, Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ImageCart, Header} from './src/components/uikit';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

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
      this.setState({data});
    } catch (error) {
      throw error;
    }
  };

  render() {
    const {title, data} = this.state;
    const {cart} = styles;
    console.log('state', this.state);
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <View style={cart}>
            {data.map(item => {
              return <ImageCart item={item} key={item.id} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
