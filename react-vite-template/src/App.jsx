import { useState } from 'react'
import './App.css'
import List from './components/List'
import Counter from './components/Counter'
import Inline from './components/Inline'
import Classes from './components/Classes'
import Parent from './components/Parent'

function App() {
  return (
    <>
      <List />
      <Counter />
      <Classes />
      <Inline />
      <Parent />
    </>
  )
}
export default App