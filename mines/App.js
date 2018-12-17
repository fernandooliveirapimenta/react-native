
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import paramns from './src/params';
import  Field from  './src/components/Field';
import MineField from './src/components/MineField';
import {createMinedBoard} from "./src/functions";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = paramns.getColumnsAmount();
        const rows = paramns.getRowsAmount();
        return Math.ceil(cols * rows * paramns.difficultLevel);
    };

    createState = () => {
         const cols = paramns.getColumnsAmount();
         const rows = paramns.getRowsAmount();
         return {
             board: createMinedBoard(rows, cols, this.minesAmount())
         }
    };

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.board}>
                  <MineField board={this.state.board}/>
              </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    board: {
        alignItems: 'center',
        backgroundColor: '#AAA'
    }
});