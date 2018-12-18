import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    pontuacao: 0
  }
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCWO2ZqZd5yRCw-mARlX2LuqOues9Nelgg",
      authDomain: "configuracaofirebasereac-b9f50.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-b9f50.firebaseio.com",
      projectId: "configuracaofirebasereac-b9f50",
      storageBucket: "configuracaofirebasereac-b9f50.appspot.com",
      messagingSenderId: "110366844507"
    };
    firebase.initializeApp(config);
  }

  salvarDados =() => {
    var funcionarios = firebase.database().ref('funcionarios');
    // funcionarios.child('001').remove();
    // funcionarios.push().child('001').child('nome').set('Jorge');
  //  var database = firebase.database();
  //  database.ref('pontuacao').set('100');
     funcionarios.push().set({
       nome: 'Fernandidino',
       altura: '1,54',
       peso: '70KG'
     })
  }

  listarDados = () => {
   var pontuacao = firebase.database().ref('pontuacao');
   pontuacao.on('value', (snapshot)=> {
     var pontuacao = snapshot.val(); 
     this.setState({pontuacao});
   }); 
  }

  cadastrarUsuario = () => {
    console.log('cads');
    var email = "fernando.pimenta1078@gmail.com";
    var senha = "fefe@123456"
    const usuario = firebase.auth();
    usuario
    .createUserWithEmailAndPassword( email, senha)
    .catch( (erro) => {

      alert(erro.message);
    });
  }

  verificarUsuarioLogado = () => {
    const usuario = firebase.auth();
    const usuarioAtual = usuario.currentUser;

    usuario.onAuthStateChanged( (usuarioAtual) => {
    if(usuarioAtual){
      alert('usuario logado');
    } else {

      alert('usuario nao logado');
    }
    })
  }

  deslogar = () => {
    const usuario = firebase.auth();
    usuario.signOut();
  }


  logarUsuario = () => {
    console.log('cads');
    var email = "fernando.pimenta1078@gmail.com";
    var senha = "fefe@123456"
    const usuario = firebase.auth();
    usuario
    .signInWithEmailAndPassword( email, senha)
    .catch( (erro) => {

      alert(erro.message);
    });
  }


  render() {
    return( 
      <View style={{marginTop: 20}}>
        <Button onPress={this.cadastrarUsuario}
        title="Salvar dados"
        color="#841584"/>
        <Button onPress={this.verificarUsuarioLogado}
        title="listar dados"
        color="#841584"/>
        <Button onPress={this.deslogar}
        title="Deslogar"
        color="#841584"/>
        <Button onPress={this.logarUsuario}
        title="logar"
        color="#841584"/>
        <Text>{this.state.pontuacao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
