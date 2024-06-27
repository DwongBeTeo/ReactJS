import React from 'react'

export default function TddListUsers({renderTddListUsers}) {
    console.log("TddListUsers:",renderTddListUsers);
    //hiển thị dữ liệu
    let tddElementUsers = renderTddListUsers.map((tddUsers,index)=>{
        return(
            <>
                <tr>
                    <th>{tddUsers.id}</th>
                    <th>{tddUsers.UserName}</th>
                    <th>{tddUsers.PassWord}</th>
                    <th>{tddUsers.Email}</th>
                    <th>{tddUsers.Phone}</th>
                    <th>...</th>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>UserName</th>
                    <th>PassWord</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tddElementUsers}
            </tbody>
        </table>
        </div>
    </div>
  )
}
