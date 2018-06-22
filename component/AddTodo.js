import React, {Component}from 'react'
import{View, Modal, Button, StyleSheet, Dimensions, TextInput} from 'react-native'
import{addTodo} from '../actions/actions'

const {width}= Dimensions.get('window')

class AddTodo extends Component{

  
    render(){
            return(
              
)
}
}

const styles = StyleSheet.create({
    input_view:{
        width: width,
        height: 30,
        borderRadius:3,
        borderColor: "gray",

    },
    input:{
        padding: 0,

    }
})

export default AddTodo
