import { ACTIONS } from '../Reducer'
import React from 'react'
import '../Style/style.css'

export default function Form( {dispatch,text,setText}) {

    const  handleInpChange = (e) => {
        setText(e.target.value)
       }

    const handleSubmit = (e) => {
         dispatch({type: ACTIONS.Add_TODO, payload: {text:text}})
         setText('')
        }

  return (
    <form>
    <input value={text} type='text' name = 'todos' onChange={handleInpChange} id='todos' required placeholder='What needs to be done?'/>
    <button onClick={handleSubmit} type='submit'>Create</button>
    </form>
    
  )
}
