import React, {useEffect, useReducer, useState} from "react";

const ACTIONS ={
    ADD_TODO: 'add-todo',
    COMPLETE_TASK: 'complete-task'
}


function reducer(state, action){
    // console.log(action)
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name) ]
        case ACTIONS.COMPLETE_TASK:
            return state.filter(task => (task.id !== action.payload.id))
        default:
            return state;
    }
}

function newTodo(name){
    return {id: Date.now(), name: name, completed: false}
}


export default function Todo(){

    const [state, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('')


    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName('')
    }

    function handleCompleteTask(id){
        dispatch({type: ACTIONS.COMPLETE_TASK, payload: {id: id}})
    }
    // console.log(state)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} type="text"></input>
            </form>

            <ul>
                {state.map(task =>(
                    <li key={task.id} onClick={() => handleCompleteTask(task.id)}>{task.name}</li>
                ))}
            </ul>
        </div>
    )
}