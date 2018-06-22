 import {combineReducers} from 'redux'

var todoId = 0

const initialState=[
]


function todoReducer(state = initialState, action ){

    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: action.id
                    
                }
            ]
        case "TOGGLE_TODO":
        return state.map((todo, index) => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        
        case "DELETE_TODO":
        return state.filter(todo =>
            todo.id !== action.id
          )

        case "CLEAR_COMPLETED":
        return state.filter(todo => todo.completed === false)

            
        case "COMPLETE_ALL":
        const markAll = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !markAll
        }))

        default:
        return state
        }
    
    
    }


    const allReducers = combineReducers({
        todos : todoReducer
    })

    export default allReducers

