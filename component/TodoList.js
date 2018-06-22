import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AllTodo from './AllTodo'
import CompletedTodo from './CompletedTodo'
import ActiveTodo from './ActiveTodo'


const TodoList = createBottomTabNavigator ({
All: AllTodo,
Active: ActiveTodo,
Completed: CompletedTodo
},
{
    headerMode:"screen",
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'All') {
            iconName = `ios-clipboard${focused ? '' : '-outline'}`;
          } else if (routeName === 'Active') {
            iconName = `ios-create${focused ? '' : '-outline'}`;
          } else if (routeName === 'Completed') {
            iconName = `ios-checkbox${focused ? '' : '-outline'}`;
          }
    
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
    tabBarOptions: {
        activeTintColor: 'steelblue',
        inactiveTintColor: 'gray',
      },
      headerStyle:{
        backgroundColor: "steelblue",

      },
      headerTintColor: "white"
})


export default TodoList


/*
  navigationOptions : ({navigation}) => ({
    tabBarIcon:({focused, tintColor}) =>{
        const {routeName} = navigation.state
        let iconName;
        if (routeName === "All"){
            iconName: `ios-clipboard${focused ? "": "-outline"}`
        }
       else if (routeName === "Active"){
            iconName: `ios-create${focused ? "": "-outline"}`
        }
      else if (routeName === "Completed"){
            iconName: `ios-checkmark-circle${focused ? "": "-outline"}`
        }

       return <Ionicons name={iconName} size={20} color={tintColor}/>
    }

}),
*/