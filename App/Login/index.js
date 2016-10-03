import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { login } from '../services/AsyncService';
import getStyles from '../styles';

const styles = getStyles();

export default class Tile extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}
