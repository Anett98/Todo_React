import React, { useState } from 'react'
import { ACTIONS } from '../Reducer'


export default function TodoList( {todo,dispatch}) {

    const [editValue,setEditValue] = useState('')

    const handleCompleted = () => {
        dispatch({type: ACTIONS.IS_DONE, payload : {id: todo.id}})
    }
    const handleEdit = () => {
        dispatch({type: ACTIONS.EDIT, payload : {id: todo.id}})
    }
    const handleEditedVersion = (e) => {
        setEditValue(e.target.value)
        
    }
    const handleDone = () => {
        dispatch({type: ACTIONS.DONE_EDITED, payload : {id: todo.id, newText: editValue}})
        dispatch({type: ACTIONS.EDIT, payload : {id: todo.id}})
    }
    

if(todo.isEditMode) {
    return (
        <ul className = {todo.isCompleted?'action': '' } >
            <li>
                <label htmlFor=''  >
                     <input className='editInp' value={editValue} type='text' onChange={handleEditedVersion}/>
                </label>
                <button  onClick={handleDone}>Save</button>
            </li>
        </ul>
      )
} else {
    return (
        <ul className = {todo.isCompleted?'action': '' } >
            <li>
                <label htmlFor=''  >
                     <input type='checkbox' checked = {todo.isCompleted} onChange={handleCompleted}/>
                     {todo.text}
                </label>
                <button disabled = {todo.isCompleted?true:false} onClick={handleEdit}>Edit</button>
            </li>
        </ul>
      )
}
}