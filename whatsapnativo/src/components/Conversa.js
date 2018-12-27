import React from 'react';
import {TextInput, Image,TouchableHighlight,  View,  Button, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {modificaMensagem,enviaMensagem,conversaUsuarioFetch} from '../action/AppActions';
import _ from 'lodash';

class Conversa extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            conversa: this.props.conversa 
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        });

    enviaMensagem = () => {
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        const nome = navigation.getParam('nome', '');

        this.props.enviaMensagem(this.props.mensagem,
            nome,email);

    }

    componentWillMount() {
        const { navigation } = this.props;
        const email = navigation.getParam('email', '');
        this.props.conversaUsuarioFetch(email);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.email != nextProps.email) {
            this.props.conversaUsuarioFetch(nextProps.email);
        }
        this.setState({conversa: nextProps.conversa});
    }

    _keyExtractor = (item, index) => `${item.uid}`;

    _renderItem = ({item}) => {

        if(item.tipo === 'e'){

            return(
                <View style={{alignItems: 'flex-end', marginTop: 5, marginBottom: 5,
                marginLeft: 40}}>
                    <Text style={{fontSize: 18,
                     color: '#000',
                      padding: 10, 
                      backgroundColor: '#dbf5b4',
                      elevation: 1}}>{item.mensagem}</Text>
                </View>
            );
        }

        return(
                <View style={{alignItems: 'flex-start', marginTop: 5, marginBottom: 5,
                marginRight: 40}}>
                    <Text style={{fontSize: 18,
                     color: '#000',
                      padding: 10, 
                      backgroundColor: '#f7f7f7',
                      elevation: 1}}>{item.mensagem}</Text>
                </View>
        );
            
        
      };
    
    render() {
        return (
        <View style={{flex:1,backgroundColor: '#eee4dc', padding: 10}}>
            <View style={{flex: 1, paddingBottom: 20}}>
                <FlatList
                    data={this.state.conversa}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    />
            </View>
            <View style={{flexDirection: 'row', height: 60}}>
                <TextInput
                 value={this.props.mensagem}
                 onChangeText={texto => this.props.modificaMensagem(texto)}
                 style={{flex: 4, backgroundColor: '#fff', fontSize: 18}}/>
                <TouchableHighlight
                    onPress={this.enviaMensagem}
                    underlayColor="#fff">
                    <Image source={require('../../assets/enviar_mensagem.png')}/>
                </TouchableHighlight>
            </View>
        </View>
            
        ); 
    }
}
const mapStateToProps = state => {
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return {...val, uid};
    })

    console.log(conversa);
    return({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, 
    {modificaMensagem,enviaMensagem,conversaUsuarioFetch})(Conversa);
    
