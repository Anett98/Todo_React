import React, { useState,useReducer } from 'react'
import {reducer} from './Components/Reducer'
import TodoList from './Components/TodoList'
import Form from './Components/Form'
import Footer from './Components/Footer'
import './App.css'


export default function App1() {
    const [todo, dispatch] = useReducer(reducer, [])
    const [text, setText] = useState('')
    
  return (
    <div className='App'>
        <h1>Todos</h1>
        <Form text={text} dispatch={dispatch} setText={setText} />
        {todo.map(item=> <TodoList text={text} setText={setText} key={item.id} todo= {item} dispatch={dispatch}/>)}
        <Footer todo={todo} dispatch={dispatch}/>
    </div>
  )
}
