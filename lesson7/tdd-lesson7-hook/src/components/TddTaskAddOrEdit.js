import React, { useEffect, useState } from 'react'

export default function TddTaskAddOrEdit({renderTddTask,renderTddIsAddOrEdit,tddOnSubmit}) {
    //đối tượng task
    // const tddTaskObj={
    //     tdd_taskId:0, 
    //     tdd_taskName:"",
    //     tdd_level:""
    // }
    const [tddTask,setTddTask] = useState(renderTddTask);
    useEffect(()=>{
        setTddTask(renderTddTask)
    },[renderTddTask])

     // tạo tiêu đề form
     const tddTieuDe = renderTddIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
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
        <h2>{tddTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input 
                name='tdd_taskId' value={tddTask.tdd_taskId} onChange={tddHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task Name</span>
                <input 
                name='tdd_taskName' value={tddTask.tdd_taskName} onChange={tddHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                <select name='tdd_level' value={tddTask.tdd_level} onChange={tddHandleChange} className="form-control" 
                placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon3"> 
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={tddHandleSubmit} classNameName='btn btn-primary'>Ghi Lại</button>
        </form>
    </div>
  )
}
