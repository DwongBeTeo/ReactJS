import axios from '../api/TddApi';
import React, { useEffect, useState } from 'react'

export default function TddFormAddOrEdit({onTddClose, onTddSubmitForm, renderUser}) {
    console.log(renderUser);
    const [tddId,setTddId] =useState(0);
    const [tddUserName,setTddUserName] =useState("");
    const [tddPassWord,setTddPassWord] =useState("");
    const [tddEmail,setTddEmail] =useState("");
    const [tddPhone,setTddPhone] =useState("");

    useEffect(()=>{
        setTddId(renderUser.id)
        setTddUserName(renderUser.UserName)
        setTddPassWord(renderUser.PassWord)
        setTddEmail(renderUser.Email)
        setTddPhone(renderUser.Phone)
    },[renderUser])

    const tddHandleClose =()=>{
        onTddClose(false);
    }
    const tddHandleSubmit =async (event)=>{
        event.preventDefault();
        console.log(tddId,tddUserName,tddPassWord,tddEmail,tddPhone);
        //post -> api
        let tddObjUser ={
            UserName: tddUserName,
            PassWord: tddPassWord,
            Email: tddEmail,
            Phone: tddPhone,
            id: tddId
        }
        const tddRes =await axios.post("tddUsers",tddObjUser);
        onTddSubmitForm(false)
    }
  return (
    <div className='border'>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="id">Id</span>
                <input type="text" className="form-control" 
                name='id' value={tddId} onChange={(ev)=>setTddId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="UserName">UserName</span>
                <input type="text" className="form-control" 
                name='UserName' value={tddUserName} onChange={(ev)=>setTddUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="PassWord">PassWord</span>
                <input type="password" className="form-control" 
                name='PassWord' value={tddPassWord} onChange={(ev)=>setTddPassWord(ev.target.value)}
                placeholder="PassWord" aria-label="PassWord" aria-describedby="PassWord" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="Email">Email</span>
                <input type="email" className="form-control" 
                name='Email' value={tddEmail} onChange={(ev)=>setTddEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="Phone">Phone</span>
                <input type="number" className="form-control" 
                name='Phone' value={tddPhone} onChange={(ev)=>setTddPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone" />
            </div>
            <button className='btn btn-primary' name='btnTddSave' onClick={(ev)=>tddHandleSubmit(ev)} >Ghi Lai</button>
            <button className='btn btn-danger' onClick={tddHandleClose}>Đóng lại</button>
        </form>
    </div>
  )
}
