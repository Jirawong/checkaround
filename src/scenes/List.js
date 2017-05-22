import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import Thumb from '../components/Thumb';

export default class List extends Component {

  static navigationOptions = {
    tabBarLabel: 'Friends',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/world.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount(){
    var self = this;
    fetch('http://192.168.1.34:8080/getUser')
    .then((response) => response.json())
    .then((responseJson) => self.setState({data: responseJson}));
  }

  render() {
    console.log(this.state.data)
    return (
      <View>
        <ScrollView>
          {this.state.data.map(createThumbRow)}
        </ScrollView>
      </View>
    );
  }
}

var createThumbRow = (user, i) => <Thumb key={i} source={user} />;

var styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
});
