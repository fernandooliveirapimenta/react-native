import React from 'react';
import { Text, View, Button } from 'react-native';

const gerarNumeroAleatorio= () => {
  var num = Math.random();
  num = Math.floor(num * 10);
  alert(num);
}

 const App = () => 
      <View style={{paddingTop:50}}>
        <Text>Gerador de numeros randomicos</Text>
        <Button 
        title="Gerar um numero randomico"
        onPress={gerarNumeroAleatorio}/>
      </View>


export default App;

