import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.thumb}>
        <Image style={styles.img} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.source.username}</Text>
          <Text>{this.props.source.checkins[0]?this.props.source.checkins[0].locationName:'No Check In Found.'}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  thumb: {
    margin: 5,
    padding: 5,
    backgroundColor: '#cccccc',
    borderRadius: 3,
    minWidth: 96,
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    width: 64,
    height: 64,
  },
  info: {
    paddingLeft: 5
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
