import React from 'react';
import {View, Image} from 'react-native';

export default class Topo extends React.Component{
    render(){
      return(
            <View>
              <Image source={require('../../assets/jokenpo.png')} />
            </View>
      );
    }
}