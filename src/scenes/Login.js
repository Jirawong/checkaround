import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Login from '../components/Login';

export default class LoginScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/profiles.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  componentDidMount() {
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
