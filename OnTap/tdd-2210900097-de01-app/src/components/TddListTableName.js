import React from 'react'

export default function TddListTableName({renderTddListTableName,onTddDelete,onTddEdit}) {
    console.log("List:",renderTddListTableName);
    //hiển thị dữ liệu
    const tddElementTableName = renderTddListTableName.map ((tddItem,tddIndex)=>{
        return(
            <tr key={tddIndex}>
                <td>{tddItem.tddId}</td>
                <td>{tddItem.tddTbName}</td>
                <td>{tddItem.tddTbEmail}</td>
                <td>{tddItem.tddTbPhone}</td>
                <td>{(tddItem.tddTbStatus===true || tddItem.tddTbStatus==="true") ? "Active":"non-Active" }</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={()=>tddHandleEdit(tddItem)}
                        >Edit</button>
                    <button className='btn btn-danger' onClick={()=>tddHandleDelete(tddItem.tddId)}>Delete</button>
                </td>
                
            </tr>
        );
    })
    //sự kiện xóa
    const tddHandleDelete =(tddId)=>{
        if(window.confirm("Bạn có muốn xóa dữ liệu có tddId="+ tddId)){
            onTddDelete(tddId);
        }   
    }
    //sửa
    const tddHandleEdit = (tddObjTableName) =>{
        onTddEdit(tddObjTableName);
    }
  return (
    <div>
        <h1>Danh Sách Thông Tin...</h1>
        <hr />
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>tddId</th>
                    <th>tddTbName</th>
                    <th>tddTbEmail</th>
                    <th>tddTbPhone</th>
                    <th>tddTbStatus</th>
                    <th>tdd: Chuc Nang</th>
                </tr>
            </thead>
            <tbody>
                {tddElementTableName}
            </tbody>
        </table>
    </div>
  )
}
