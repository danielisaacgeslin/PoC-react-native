import React, { Component } from 'react';
import { Navigator, View, Text, TouchableHighlight } from 'react-native';
import Login from './Login';
import getStyles from './styles';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} />);
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text>Title</Text>
        </View>
        <Navigator
          initialRoute={{id: 'login'}}
          renderScene={this.navigatorRenderScene}/>
      </View>
    );
  }
}
