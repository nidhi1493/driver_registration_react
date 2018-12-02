import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';


export default class RegistrationSuccessful extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>RegistrationSuccessful Screen</Text>          
        </View>
      );
    }
  }
  AppRegistry.registerComponent(RegistrationSuccessful, () => RegistrationSuccessful);