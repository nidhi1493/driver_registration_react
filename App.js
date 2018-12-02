import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen/HomeScreen';
import RegistrationForm from './app/components/RegistrationForm/RegistrationForm';
import RegistrationSuccessful from './app/components/RegsitrationSuccessful/RegistrationSuccessful';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Register: RegistrationForm,
    RegisterSuccess: RegistrationSuccessful,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

