
import React, {Component} from "react"
import { View, TextInput, StyleSheet, Dimensions, Button, FlatList, Text } from 'react-native'
import TodoList from "./TodoList";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodo, toggleTodo} from '../actions/actions'

const {width} = Dimensions.get('window')

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
          text:"all"
        }
    }

        



        render(){

            const {todos}= this.props
            return(
                   <View>

                   

                          <TodoList        />
                   </View> 


            )
        }

}

const styles = StyleSheet.create({
    input_view:{
        width: width,
        height: 30,
        borderRadius:3,
        borderColor: "gray",

    }
})

function mapStateToProps(state){
    return{
        todos : state.todos
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            addTodo, addTodo,
            toggleTodo: toggleTodo
        
        }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Todo)
