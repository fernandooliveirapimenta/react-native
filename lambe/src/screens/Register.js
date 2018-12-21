import React, {Component} from 'react';
import {StyleSheet,Text,View,FlatList,TouchableOpacity,TextInput,Image,Dimensions,
Platform, ScrollView, Alert} from 'react-native';

class Register extends Component{
    state = {
        name: '',
        email: '',
        password: ''
    };

    login = () => {

    }

    render() {
        return(
                <View style={styles.container}>
                    <TextInput placeholder='Nome'
                        autoFocus={true}
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                    <TextInput placeholder='Email'
                        autoFocus={true}
                        keyboardType='email-address'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                    <TextInput placeholder='Senha'
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.senha}
                        onChangeText={password => this.setState({password})}
                    />
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4285f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
});

export default Register;