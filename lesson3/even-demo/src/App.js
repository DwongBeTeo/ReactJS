import React, { Component } from 'react'
import TDD_eventfrom1 from './components/TDD_eventform1'
import TDD_eventform2 from './components/TDD_eventform2'
import TDD_eventform3 from './components/TDD_eventform3'
import TDD_eventform4 from './components/TDD_eventform4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event From Demo</h1>
        <TDD_eventform1 />
        <TDD_eventform2 />
        <TDD_eventform3 />
        <TDD_eventform4 name="dương đăng trần" />
      </div>
    )
  }
}
