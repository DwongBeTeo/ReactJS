import React, { Component } from 'react'
    // xử lý sự kiện với props,state 
export default class TDD_eventform3 extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng dữ liệu thông qua state 
        this.state ={
            name: "trần đăng dương",
            job: "thất nghiệp"
        }
    }
  render() {
    return (
        <div className='alert alert-primary'>
            <h2> Thay đổi dữ liệu trong state</h2>
            <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
        </div>
    )
  }
}
