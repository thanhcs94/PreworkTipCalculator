import React, { Component } from 'react';
import { AppRegistry, View, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';

import PowerRanger from './Apps/powerRanger.js';

export default class PreworkTipCalculator extends Component {
  aaaaa(){
    Keyboard.dismiss(); 
  }
  render() {
    return (
      <TouchableWithoutFeedback style={styleCSS.container} onPress={()=>this.aaaaa()}>
        <View style={styleCSS.container} >
          <PowerRanger />
        </View>
    </TouchableWithoutFeedback>
    );
  }
}

var styleCSS = StyleSheet.create({
  container: {
    flex:1
  }
})

AppRegistry.registerComponent('PreworkTipCalculator', () => PreworkTipCalculator);
