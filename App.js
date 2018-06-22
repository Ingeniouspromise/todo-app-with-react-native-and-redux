/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, FlatList
} from 'react-native';
import {createStore}from 'redux'
import {Provider} from 'react-redux'
import allReducer from "./reducers/reducer"
import TodoList from './component/TodoList'

const store = createStore(allReducer)

class App extends Component{

  render(){
    return(
     <Provider store={store}>
           <TodoList/>
      </Provider>

     
    )
  }
}

export default App