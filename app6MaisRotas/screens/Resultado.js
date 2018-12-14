import React, {Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

const cara = require('../assets/moeda_cara.png');
const coroa = require('../assets/moeda_coroa.png');
export default class Resultado extends Component{
    state={
        resultado: ''
    }
    static navigationOptions = {
        title: 'Resultado',
      };

      componentWillMount(){
          const al = Math.floor(Math.random() * 2);
          let couc = '';
          if(al === 0) {
              couc = 'cara';
          } else {
              couc = 'coroa';
          }

          this.setState({resultado: couc});
      }
    render(){

        if(this.state.resultado === 'cara'){
            return(
                <View style={styles.resultado}>
                    <Image source={cara}/>
                </View>
            );
        } else{
            return(
                <View style={styles.resultado}>
                    <Image source={coroa}/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({

    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});