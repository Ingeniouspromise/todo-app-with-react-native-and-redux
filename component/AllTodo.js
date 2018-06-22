
import React, {Component} from 'react'
import {View, Text, SwipeableFlatList, StyleSheet, TextInput, Button, StatusBar,
        TouchableOpacity, CheckBox, Modal, Dimensions, ToolbarAndroid, Keyboard} from 'react-native'
import {toggleTodo} from '../actions/actions' 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import{addTodo, deleteTodo, clearCompleted, completeAll} from '../actions/actions'
import {SafeAreaView} from 'react-navigation'



const {width} = Dimensions.get('window')
class AllTodo extends Component{
    static navigationOptions={
        title: "All"
    }
    constructor(props){
        super(props);
        this.state={
            text:'',
            date:""
           
        }
    }

    onActionSelected(position){
        if(position === 0){
            this.props.clearCompleted()
        }
        else{
            this.props.completeAll()
        }
    }
   
    
    renderList(item){
        return(
           
            <View style={styles.todo_box}>
                <CheckBox value={item.completed} onValueChange={()=>this.props.toggleTodo(item.id)}/>
                <View>
                <Text style={[styles.todo_text, { color: item.completed ? "red" : "black", 
                                                textDecorationLine: item.completed ? "line-through": ""}]}>{item.text}</Text>
                <Text>{this.state.date}</Text>
                </View>
                <TouchableOpacity style={{ padding: 3, borderColor: "red", width: 20, position:"absolute", right: 10,}}
                                onPress={()=>this.props.deleteTodo(item.id)}>
                <Ionicons name="ios-trash" size={25} color="red"/>
            </TouchableOpacity>
            </View>
        )
    }

    addTodo(){
        const now = new Date()
        
       
        const time = now.toLocaleString('en-US', {hour:"numeric", minute: "numeric", hour12: true}) 
        
        if (this.state.text !== ""){
        this.props.addTodo(this.state.text)
        this.setState({
            text: "",
            date: `${time}`
        })
        Keyboard.dismiss()
        
    }
    }

    render(){
        return(
            <View style={{flex:1}}>
           <StatusBar
     backgroundColor="#072f5f"
     barStyle="light-content"
   />

            <SafeAreaView style={{flex: 1}}>

                      <ToolbarAndroid
            style={styles.toolbar}
            title="All Todo"
            titleColor= "white"
            actions = {[
              {title: "Clear Completed", show: "never"},
              {title: "Complete All", show:"never"}
            ]}
            onActionSelected={this.onActionSelected.bind(this)}
            />

            <View style={{flexDirection:"row", justifyContent:"center", marginBottom: 10,}}>
             <View style={styles.input_view}>   
                     
                     <TextInput value={this.state.text} 
             onChangeText={(text)=>this.setState({text})} 
             style={styles.input} underlineColorAndroid="transparent"
             placeholder="Enter Todo Here" returnKeyType="done"/>

             </View>
                <Button title="add" onPress={this.addTodo.bind(this)}/>
                </View>
               
            <SwipeableFlatList
            data={this.props.todos}
            renderItem={({item, props})=>this.renderList(item)}
           
            maxSwipeDistance={100}
            keyExtractor={(item, index) => item.text}
            />
                
             
                   

                    
                    
            </SafeAreaView>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    todo_box:{
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center',
        width: width,
        position: 'relative'
    },
    todo_text:{
        marginLeft: 2,
        fontFamily: '',
        fontSize: 18,
    },
    modalStyle:{
     flex: 1,
     padding: 10,
    justifyContent: 'center',
    alignItems: "center"
    },
    modalHeading:{
        backgroundColor:"lightgray",
        padding: 3,
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: 'center',
    },
    input_view:{
        width: 310,
        height: 50,
        borderRadius:3,
        borderWidth: 2,
        alignSelf: 'center',
        borderColor: "powderblue",

    },
    toolbar: {
        backgroundColor: '#1261A0',
        height: 48,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginBottom: 10,
      }, 


})

function mapStateToProps(state){
    return{
        todos: state.todos
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            toggleTodo : id => toggleTodo(id),
            deleteTodo: id => deleteTodo(id),
            addTodo: addTodo,
            clearCompleted: clearCompleted,
            completeAll: completeAll
           
        }, dispatch)
            
}

export default connect(mapStateToProps, matchDispatchToProps)(AllTodo)