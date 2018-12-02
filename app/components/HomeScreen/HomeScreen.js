import React, { Component } from 'react';
import {AppRegistry,
  View,
  Button,
  Text
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Registration Details"
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      );
    }
  }
  AppRegistry.registerComponent(HomeScreen, () => HomeScreen);