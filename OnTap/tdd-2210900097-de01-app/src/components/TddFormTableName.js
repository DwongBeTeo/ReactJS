import axios from '../tdd_apis/tdd-2210900097'
import React, { useEffect, useState } from 'react'

export default function TddFormTableName({renderTddTableName, onTddAdd}) {

    const [tddId,setTddId] =useState (renderTddTableName.tddId)
    const [tddTbName,settddTbName] =useState (renderTddTableName.tddTbName)
    const [tddTbEmail,settddTbEmail] =useState (renderTddTableName.tddTbEmail)
    const [tddTbPhone,settddTbPhone] =useState (renderTddTableName.tddTbPhone)
    const [tddTbStatus,settddTbStatus] =useState (renderTddTableName.tddTbStatus)

    useEffect(()=>{
        setTddId(renderTddTableName.tddId)
        settddTbName(renderTddTableName.tddTbName)
        settddTbEmail(renderTddTableName.tddTbEmail)
        settddTbPhone(renderTddTableName.tddTbPhone)
        settddTbStatus(renderTddTableName.tddTbStatus)
    },[renderTddTableName])

    const tddHandleSubmit =async (tddEvent)=>{
        tddEvent.preventDefault();
        const tddObjTableName = {
            "tddTbName": tddTbName,
            "tddTbEmail": tddTbEmail,
            "tddTbPhone": tddTbPhone,
            "tddTbStatus": tddTbStatus,
            "tddId": tddId
        }
        console.log(tddObjTableName);
         //thêm vào dữ liệu trong api'
    await axios.post("tddTableName",tddObjTableName)
    onTddAdd();
    }
    const tddHandleEdit =async (tddEvent)=>{
        tddEvent.preventDefault();
        const tddObjTableName = {
            "tddTbName": tddTbName,
            "tddTbEmail": tddTbEmail,
            "tddTbPhone": tddTbPhone,
            "tddTbStatus": tddTbStatus,
            "tddId": tddId
        }
        console.log(tddObjTableName);
         //thêm vào dữ liệu trong api'
    await axios.put("tddTableName/" +tddObjTableName.tddId,tddObjTableName)
    onTddAdd();
    }
   
  return (
    <div>
        <h2>form xử lý dữ liệu sửa thông tin</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tddId">tddId</span>
                <input type="text" className="form-control" 
                        name='tddId'
                        value={tddId}
                        onChange={(tddEv)=>setTddId(tddEv.target.value)}
                        placeholder="tddId" 
                        aria-label="tddId" 
                        aria-describedby="tddId" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tddTbName">tddTbName</span>
                <input type="text" className="form-control" 
                        name='tddTbName'
                        value={tddTbName}
                        onChange={(tddEv)=>settddTbName(tddEv.target.value)}
                        placeholder="tddTbName" 
                        aria-label="tddTbName" 
                        aria-describedby="tddTbName" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tddTbEmail">tddTbEmail</span>
                <input type="text" className="form-control" 
                        name='tddTbEmail'
                        value={tddTbEmail}
                        onChange={(tddEv)=>settddTbEmail(tddEv.target.value)}
                        placeholder="duongdangtran54321@gmail.com" 
                        aria-label="tddTbEmail" 
                        aria-describedby="tddTbEmail" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tddTbPhone">tddTbPhone</span>
                <input type="number" className="form-control" 
                        name='tddTbPhone'
                        value={tddTbPhone}
                        onChange={(tddEv)=>settddTbPhone(tddEv.target.value)}
                        placeholder="0828887204" 
                        aria-label="tddTbPhone" 
                        aria-describedby="tddTbPhone" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tddTbStatus">tddTbStatus</span>
                <select name='tddTbStatus' id='tddTbStatus' className='form-control'
                        value={tddTbStatus}
                        onChange={(tddEv)=>settddTbStatus(tddEv.target.value)}
                        >
                    <option value={true}>Active</option>
                    <option value={false}>non-Active</option>
                </select>
            </div>
            <button className='btn btn-outline-success mt-2' name='btnTddSave' onClick={tddHandleSubmit}>Save</button>
            <button className='btn btn-outline-warning mt-2 ms-2' onClick={tddHandleEdit}>Sửa đổi</button>
        </form>
    </div>
  )
}
