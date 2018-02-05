import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {stackNavigator, StackNavigator} from 'react-navigation';

import Post from './Post'
import navStyles from './styles/navStyles'

 class App extends React.Component {
  static navigationOptions={
    title:'Home',
    ...navStyles
  }
  goToPost=()=>{
    this.props.navigation.navigate('Post')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this.goToPost} title="go to Post Page" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default StackNavigator({
  Home:{
    screen:App
  },
  Post:{
    screen:Post
  }
})
