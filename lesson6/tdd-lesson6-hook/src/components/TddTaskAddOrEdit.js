import React, { useState } from 'react'

export default function TddTaskAddOrEdit({tddOnSubmit}) {
    //đối tượng task
    const tddTaskObj={
        tdd_taskId:0, 
        tdd_taskName:"",
        tdd_level:""
    }
    const [tddTask,setTddTask] = useState(tddTaskObj);
    //hàm xử lý sự kiện thay đổi trên điều khiển
    const tddHandleChange = (tddEvent) => {
        let name = tddEvent.target.name;
        let value = tddEvent.target.value;
        setTddTask(prev=>{
            return{
                ...prev,
                [name]: value,
            }
            
        })
    }
    console.log(tddTask);
    const tddHandleSubmit =(tddEvent)=>{
        tddEvent.preventDefault();
        tddOnSubmit(tddTask);
    }
  return (
    <div>
        <h2>Thêm mới</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='tdd_taskId' value={tddTask.tdd_taskId} onChange={tddHandleChange} />
            </div>
            <div>
                <label>Task Name</label>
                <input name='tdd_taskName' value={tddTask.tdd_taskName} onChange={tddHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='tdd_level' value={tddTask.tdd_level} onChange={tddHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={tddHandleSubmit}>Ghi Lại</button>
        </form>
    </div>
  )
}
