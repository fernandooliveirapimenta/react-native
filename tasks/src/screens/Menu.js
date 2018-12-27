import React from 'react';
import {StyleSheet,ScrollView,View,Text,AsyncStorage,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {Gravatar} from 'react-native-gravatar';
import commonStyles from '../commonStyles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData');
        props.navigation.navigate('Loading');
    };

   return (
       <ScrollView>
           <View style={styles.header}>
               <Text style={styles.title}>Tasks</Text>
               <Gravatar
                   style={styles.avatar}
                   options={{email: props.navigation.getParam('email'),
                       secure: true
                   }}/>
               <View style={styles.userInfo}>
                   <View>
                       <Text style={styles.name}>
                           {props.navigation.getParam('name')}
                       </Text>
                       <Text style={styles.email}>
                           {props.navigation.getParam('email')}
                       </Text>
                   </View>
                   <TouchableOpacity onPress={logout}>
                       <View style={styles.logoutIcon}>
                          <Icon name={'sign-out'} color={'#800'} size={30}/>
                       </View>
                   </TouchableOpacity>
               </View>
           </View>
           <DrawerItems {...props}/>
       </ScrollView>
   ) ;
}

const styles = StyleSheet.create({
   header: {
       borderBottomWidth: 1,
       borderColor: '#DDD'
   } ,
    title: {
       backgroundColor: '#FFF',
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: 20,
        padding: 10
    },
    avatar: {
       width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10
    },
    name: {
       fontFamily: commonStyles.fontFamily,
        color: commonStyles.mainText,
        fontSize: 20,
        marginLeft: 10
    },
    email: {
       fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10
    },
    menu:{
       justifyContent: 'center',
        alignItems: 'stretch'
    },
    userInfo: {
       flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoutIcon: {
       justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
})  ;