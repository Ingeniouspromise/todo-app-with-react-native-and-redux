 let num = 0

export const addTodo = (text)=>{
    return{
        type: "ADD_TODO",
        id: num++,
        text
    }
}

export const toggleTodo = (id) => {
    return{
        type: "TOGGLE_TODO",
        id
    }
}

export const clearCompleted = () =>{
    return{
        type:"CLEAR_COMPLETED",
        
    }
}

export const completeAll = ()=>{
    return {
        type : "COMPLETE_ALL"
    }
}

export const deleteTodo =(id) =>{
    return{
        type : "DELETE_TODO",
        id
    }
}



