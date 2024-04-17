import React, { Component } from 'react'

export default class TDD_eventfrom1 extends Component {

    //hàm sử lý sự kiện 
    eventHandleClick1 = ()=>{
        alert ("event handle 1")
    }
    eventHandleClick2 = ()=>{
        alert ("event handle 2")
    }

  render() {
    return (
      <div className='alert alert-danger'>
        <h1>Event handle</h1>
        {/* gọi hàm sử lý sự kiện khi render */}
        <button onClick={this.eventHandleClick1()}>Click1</button>
        {/* gọi hàm sử lý khi click  */}
        <button onClick={this.eventHandleClick2}>Click2 </button>
      </div>
    )
  }
}
