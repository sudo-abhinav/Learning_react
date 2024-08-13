
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {useState} from 'react'


function App() {
  
  const [todoToEdit, setTodoToEdit] = useState(null);
  
  const handleEdit = (todo) => {
    setTodoToEdit(todo);
  };

  return (
    <>
    <h1>
      Redux Tookit by Hitesh Choudhary
      </h1>
      <AddTodo todoToEdit={todoToEdit}/>
      <Todos onEdit={handleEdit}/>
      </>
  )
}

export default App
