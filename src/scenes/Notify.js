import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class Nofity extends Component {

  static navigationOptions = {
    tabBarLabel: 'Nofity',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/notify.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
});
