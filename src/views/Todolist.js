import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";



const Todolist = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    // const [todos,setTodos] = useState([])
    const [todoItem,setTodoItem] = useState("")
    useEffect(() => {
        fetch("http://localhost:3001/")
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "DISPLAY_TODOS",
                payload: data
            })
        })

    }, [todoItem])

    const handleClick = (e) => {
        e.preventDefault();
        console.log(todoItem, "Clicked")
        fetch("http://localhost:3001/todo", {
            method: "PUT",
            body: JSON.stringify({todoItem:todoItem}),
            headers: {"Content-Type":"application/json"}

        })
        .then(resp => resp.json())
        .then(data => {
            setTodoItem("")
            console.log(data)
            dispatch({
                type: "ADD_TODO",
                todo: data.todoItem
            })
        })
        
        

    }

    return (
        <div>
            <input type = "text" value = {todoItem} onChange = {(e) => setTodoItem(e.target.value)}/>
            <button onClick = {handleClick}>Add Todo</button>
            <ul>
                {todos.map(todo => { 

                    return <li>{todo}</li>
                }
                    )}
            </ul>
            
        </div>
    )
}

export default Todolist
