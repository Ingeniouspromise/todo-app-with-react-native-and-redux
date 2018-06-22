import TodoList from './TodoList'
import AddTodo from './AddTodo'
import {createStackNavigator} from 'react-navigation'


const Main = createStackNavigator(
    {
        Todo:TodoList,
        
        
    },
    {
         
    }
)

export default Main