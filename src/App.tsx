import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Sacar la basura',
    completed: true
  },
  {
    id: '2',
    title: 'Lavar los platos',
    completed: false
  },
  {
    id: '3',
    title: 'Programar',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
