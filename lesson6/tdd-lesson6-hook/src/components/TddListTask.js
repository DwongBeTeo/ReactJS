import React from 'react'

export default function TddListTask({renderTddListTasks}) {
    console.log(renderTddListTasks);
    //render data
    let tddElementTask = renderTddListTasks.map((task, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.tdd_taskId}</td>
                    <td>{task.tdd_taskName}</td>
                    <td>{task.tdd_level}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
            </thead>
            <tbody>
                {tddElementTask}
            </tbody>
        </table>
    </div>
  )
}
