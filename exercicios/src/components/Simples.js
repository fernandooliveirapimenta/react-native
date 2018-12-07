import React from 'react';
import {Text, View} from 'react-native';
import  Padrao from '../estilo/Padrao';

// export  default  function Simples(props) {
//     return <Text>{props.texto}</Text>;
//
// }

// export  default   props =>
//     <View>
//         <Text>{props.texto}</Text>
//         <Text>{props.texto}</Text>
//     </View>;

// export  default   props =>
//     [
//
//         <Text key={1}>{props.texto}</Text>,
//         <Text key={2}>{props.texto}</Text>
//
//     ]
//     ;

 export  default   props => <Text style={Padrao.ex}>{props.texto}</Text>
