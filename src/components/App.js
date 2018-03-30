import React from 'react'
import Footer from './Footer'
import AddComponent from '../containers/AddTodo'
import ComponentList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <ComponentList />
    <AddComponent />
  </div>
)

export default App