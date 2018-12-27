import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground,FlatList,TouchableOpacity,Platform,Alert,AsyncStorage} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../../src/commonStyles'
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import AddTask from './AddTask';
import axios from 'axios';
import {server,showError} from '../common';
import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';

export default class Agenda extends Component{

    state = {
     tasks: [],
     visibleTasks: [],
     showDoneTasks: true,
     showAddTask: false
    };

    componentDidMount = async () => {
        // const data = await AsyncStorage.getItem('t');
        // if(data) {
        //     const tasks = JSON.parse(data);
        //     console.info(tasks);
        //     this.setState({tasks}, this.filterTasks);
        // }
        this.loadTasks();
    };

    filterTasks= () => {
      let visibleTasks = null;
      if(this.state.showDoneTasks){
          visibleTasks = [...this.state.tasks];
      } else {
          const pending= task => task.doneAt === null;
          visibleTasks = this.state.tasks.filter(pending);
      }
      this.setState({visibleTasks});
      AsyncStorage.setItem('t',JSON.stringify([...this.state.tasks]));
    };

    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
    };

    toggleTask = async id => {
        //  const tasks = this.state.tasks.map(task => {
        //  if(task.id === id){
        //      task = {...task};
        //      task.doneAt = task.doneAt ? null : new Date();
        //  }

        //  return task;
    //  }); 
    //  this.setState({tasks}, this.filterTasks);
        try {
            await axios.put(`${server}/tasks/${id}/toggle`);
            await this.loadTasks();
        } catch (error) {
           showError(error); 
        }
    };

    addTask = async task => {
        // const tasks = [...this.state.tasks];
        // tasks.push({
        //     id: Math.random(),
        //     desc: task.desc,
        //     estimateAt: task.date,
        //     doneAt: null
        // });

        // this.setState({tasks, showAddTask: false}, this.filterTasks);
        
        try {
            await axios.post(`${server}/tasks`,{
                desc: task.desc,
                estimateAt: task.date
            });
            this.setState({showAddTask: false}, this.loadTasks);
        }catch (e) {
            showError(e)
        }
    };

    deleteTask = async id => {
        // const tasks = this.state.tasks.filter(task => task.id !== id);
        // this.setState({tasks}, this.filterTasks);
        try {
           await axios.delete(`${server}/tasks/${id}`);
           await this.loadTasks();
        }catch (e) {
            showError(e);
        }
    };

    loadTasks = async () => {
        try {
           const maxDate = moment().add({days: this.props.daysAhead})
               .format('YYYY-MM-DD 23:59') ;
           const res = await axios.get(`${server}/tasks?date=${maxDate}`);
           this.setState({tasks: res.data}, this.filterTasks);
        } catch (error) {
           showError(error); 
        }
    };

    render() {
        let styleColor = null;
        let image = null;
        
        switch (this.props.daysAhead) {
            case 0:
                styleColor = commonStyles.colors.today;
                image = todayImage;
                break;
            case 1:
                styleColor = commonStyles.colors.tomorrow;
                image = tomorrowImage;
                break;
            case 7:
                styleColor = commonStyles.colors.week;
                image = weekImage;
                break;
            default:
                styleColor = commonStyles.colors.month;
                image = monthImage;
                break;
        }
        
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                         onSave={this.addTask}
                         onCancel={()=>this.setState({showAddTask: false})}/>
                <ImageBackground source={image} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                           <Icon name={'bars'} size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                           <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                           size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de]  MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask}/>}
                              data={this.state.visibleTasks}
                              keyExtractor={item => `${item.id}`}
                             />
                </View>
                <ActionButton
                    buttonColor={styleColor}
                    onPress={() => {this.setState({showAddTask: true})}}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  background: {
      flex: 3
  },
    titleBar: {
      flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
      fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 51,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
      fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    tasksContainer: {
      flex: 7
    },
    iconBar: {
      marginTop: Platform.OS === 'ios' ? 30 : 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});