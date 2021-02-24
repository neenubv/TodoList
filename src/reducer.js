export const reducer = (state = {todos:[]} , action) =>{
    switch(action.type){
        case "ADD_TODO":
        return {
            ...state,
            todos:[...state.todos, action.todo]
        }   
        case "DISPLAY_TODOS":
            return{
                todos: action.payload
            }

        default:
            return state;

    }

}