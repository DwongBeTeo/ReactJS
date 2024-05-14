import React from 'react'
import TddUseState from './components/TddUseState'
import TddUseEffect from './components/TddUseEffect'
import TddUseContext from './components/TddUseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h2>Trần Đăng Dương-Hook</h2>
      <hr />
      <TddUseState />
      <hr />
      <TddUseEffect />
      <hr />
      <TddUseContext />
    </div>
  )
}
