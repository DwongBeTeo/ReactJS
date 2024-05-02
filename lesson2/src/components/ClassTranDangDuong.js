import React, { Component } from 'react'

class classTranDangDuong extends Component {
    constructor (props){
        super(props);
        this.state = {
            fullName : "Tran Dang Duong",
            class : "K22CNT2"
        }
    }
    users = {
        name : "Tran Dang Duong",
        age : 20
    }
    handleChange = (event) =>{
        this.setState({
            fullName : "Ashe",
            class : "Xu thanh hoa"
        })
    }
  render() {
    return (
      <div>
        <h2>Class Component Demo</h2>
        {this.users.name} - {this.users.age}
        <hr/>
        <h3>Info : {this.props.info}</h3>
        <h3>Time : {this.props.time}</h3>
        <hr/>
        <h3>State: FullName :{this.state.fullName} -  Class : {this.state.class}</h3>
        <button onClick = {this.handleChange} >Change Name</button>
      </div>
    )
  }
}

export default classTranDangDuong ;