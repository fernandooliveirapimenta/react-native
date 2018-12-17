
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';
import paramns from './src/params';
import  Field from  './src/components/Field';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelect from './src/screens/LevelSelect';
import {createMinedBoard,cloneBoard,openField,hadExplosion,wonGame,showMines,invertFlag,flagsUsed} from "./src/functions";


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
             board: createMinedBoard(rows, cols, this.minesAmount()),
             won: false,
             lost: false,
             showLevelSelection: false
         }
    };

    onOpenField = (row, column) => {
      const board = cloneBoard(this.state.board);
      openField(board,row,column);
      const lost = hadExplosion(board);
      const won = wonGame(board);

      if(lost){
          showMines(board);
          Alert.alert('Perdeeeeeeeu!', 'Tente novamente');
      }
      if(won) {
          Alert.alert('Parabéns', 'Você Venceu!');
      }

      this.setState({board,lost,won});
    };

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
        invertFlag(board,row,column);
        const won = wonGame(board);
        if(won){
            Alert.alert('Parabéns', 'Você Venceu!');
        }

        this.setState({board,won});
    };

    onLevelSelected = level => {
        console.log(level);
        paramns.difficultLevel = level;
        this.setState(this.createState());
    };

    onNewGame = () => {
        this.setState(this.createState());
    };

    render() {
        return (
          <View style={styles.container}>
              <LevelSelect isVisible={this.state.showLevelSelection}
              onLevelSelected={this.onLevelSelected}
              onCancel={() => this.setState({showLevelSelection: false})}/>
              <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
                      onFlagPress={() => this.setState({showLevelSelection: true})}
                        onNewGame={this.onNewGame}/>
              <View style={styles.board}>
                  <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
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