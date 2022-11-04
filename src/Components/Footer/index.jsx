import { ACTIONS } from '../Reducer'
import React, { useState, useEffect } from 'react'
import '../Style/style.css'

export default function Footer({todo, dispatch}) {
    const [checkedAll, setCheckedAll] = useState(false)
    useEffect(() => {
        if(todo.length) {
            const toggle = todo.every(item=> { 
                return item.isCompleted
             })
             setCheckedAll(toggle);
        } else {
            setCheckedAll(false)  
        }
      
    }, [todo])

    const handleDelete = () => {
        dispatch({type: ACTIONS.DELETE, payload: {id:todo.id}})
    }
    const handleSelectAll = () => {
        setCheckedAll(!checkedAll)
        dispatch({type: ACTIONS.SELECT_ALL, payload: {checkedAll:checkedAll}})
    }
    
    

  return (
    <div className='row'>
         <label htmlFor='all'>
               <input checked = {checkedAll} onChange={handleSelectAll} type='checkbox' name='all' id='all'/>
                ALL
         </label>
         <p>You have {todo.length} todo</p>
         <button onClick={handleDelete} className='delete'>Delete {checkedAll?'All': 'Selected'}</button>
   </div>
    
  )
}
