
import React, {Component} from 'react'
import {View, Text, SwipeableFlatList, StyleSheet, CheckBox, 
            StatusBar, ToolbarAndroid, TouchableOpacity, Dimensions} from 'react-native'
import {toggleTodo, deleteTodo, completeAll} from '../actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Ionicons from 'react-native-vector-icons/Ionicons'


const {width}= Dimensions.get('window')

class ActiveTodo extends Component{

    static navigationOptions={
        title: "Active"
    }
    constructor(props){
        super(props)
        this.state={
            
        }
       
    }

    onActionSelected(position){
        if(position === 0){
            this.props.completeAll()
        }
       
    }
    
    renderList(item){
        return(
            <View style={styles.todo_box}>
            <CheckBox value={item.completed} onValueChange={()=>this.props.toggleTodo(item.id)}/>
            <Text style={[styles.todo_text, { color: item.completed ? "red" : "black"}]}>{item.text} {item.id} </Text>
            <TouchableOpacity style={{ padding: 3, borderColor: "red", width: 20, position:"absolute", right: 10,}}
                            onPress={()=>this.props.deleteTodo(item.id)}>
            <Ionicons name="ios-trash" size={25} color="red"/>
        </TouchableOpacity>
        </View>
        )
    }
    render(){
        var completed = this.props.todos.filter( item => !item.completed )
        return(
            <View style={{flex:1}}>
              <StatusBar
     backgroundColor="#072f5f"
     barStyle="light-content"
   />
     <ToolbarAndroid
            style={styles.toolbar}
            title="All Todo"
            titleColor= "white"
            actions = {[
              {title: "Complete All", show: "never"},
             
            ]}
            onActionSelected={this.onActionSelected.bind(this)}
            />
            <SwipeableFlatList
            data={completed}
            renderItem={({item, props})=>this.renderList(item)}
            maxSwipeDistance={100}
            keyExtractor={(item, index) => item.text}
            />
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
        completeAll: completeAll,

    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ActiveTodo)