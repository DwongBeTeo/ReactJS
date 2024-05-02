import React from 'react'

function funcTranDangDuong(props) {
  const users = {
    name : "Tran Dang Duong",
    age : 19
  }
  return (
    <div>
      <h3>Function Component Demo</h3>
        <h3>
          Welcome , {users.name} . Your age is {users.age}
        </h3>
        <h3>
          Props:
          <br/>FullName: {props.fullName}
          <br/>Age : {props.age}
        </h3>
    </div>
  )
}

export default funcTranDangDuong;