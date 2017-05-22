import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class Checkin extends Component {

  static navigationOptions = {
    tabBarLabel: 'Checkin',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/checkin.png')}
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
