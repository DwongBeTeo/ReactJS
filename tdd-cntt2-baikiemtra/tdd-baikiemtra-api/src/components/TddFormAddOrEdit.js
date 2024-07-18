import React, { useEffect, useState } from 'react'
import axios from '../api/TddApi'  


export default function TddFormAddOrEdit({onTddClose,onTddSubmitForm, renderUsers}) {
    console.log(renderUsers);
    const [tddId,setTddId] =useState(0);
    const [tddHoSV,setTddHoSV] =useState("");
    const [tddTenSV,setTddTenSV] =useState("");
    const [tddNgaySinh,setTddNgaySinh] =useState("");
    const [tddNoiSinh,setTddNoiSinh] =useState("");
    const [tddMaKH,setTddMaKH] =useState("");
    const [tddHocBong,setTddHocBong] =useState("");
    const [tddDiemTrungBinh,setTddDiemTrungBinh] =useState("");

    useEffect(()=>{
        setTddId(renderUsers.id)
        setTddHoSV(renderUsers.HoSV)
        setTddTenSV(renderUsers.TenSV)
        setTddNgaySinh(renderUsers.NgaySinh)
        setTddNoiSinh(renderUsers.NoiSinh)
        setTddMaKH(renderUsers.MaKH)
        setTddHocBong(renderUsers.HocBong)
        setTddDiemTrungBinh(renderUsers.DiemTrungBinh)

    },[renderUsers])

    const tddHandleClose=()=>{
        onTddClose(false)
    }
    const tddHandleSubmit =async (event)=>{
        event.preventDefault();
        console.log(tddId,tddHoSV,tddTenSV,tddNgaySinh,tddNoiSinh,tddMaKH,tddHocBong,tddDiemTrungBinh);
        //post -> api
        let tddObjUser ={
            HoSV: tddHoSV,
            TenSV: tddTenSV,
            NgaySinh: tddNgaySinh,
            NoiSinh: tddNoiSinh,
            MaKH: tddMaKH,
            HocBong: tddHocBong,
            DiemTrungBinh:tddDiemTrungBinh,
            id: tddId
        }
        const tddRes =await axios.post("tddSinhVien",tddObjUser);
        onTddSubmitForm(false)
    }
  return (
    <div className='border'>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="id">id</span>
                <input type="text" className="form-control" 
                name='id' value={tddId} onChange={(ev)=>setTddId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="HoSV">HoSV</span>
                <input type="text" className="form-control" 
                name='HoSV' value={tddHoSV} onChange={(ev)=>setTddHoSV(ev.target.value)}
                placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="TenSV">TenSV</span>
                <input type="text" className="form-control" 
                name='TenSV' value={tddTenSV} onChange={(ev)=>setTddTenSV(ev.target.value)}
                placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="NgaySinh">NgaySinh</span>
                <input type='date' className="form-control" 
                name='NgaySinh' value={tddNgaySinh} onChange={(ev)=>setTddNgaySinh(ev.target.value)}
                placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" className="form-control" 
                name='NoiSinh' value={tddNoiSinh} onChange={(ev)=>setTddNoiSinh(ev.target.value)}
                placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaKH">MaKH</span>
                <input type="text" className="form-control" 
                name='MaKH' value={tddMaKH} onChange={(ev)=>setTddMaKH(ev.target.value)}
                placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="HocBong">HocBong</span>
                <input type="text" className="form-control" 
                name='HocBong' value={tddHocBong} onChange={(ev)=>setTddHocBong(ev.target.value)}
                placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" className="form-control" 
                name='DiemTrungBinh' value={tddDiemTrungBinh} onChange={(ev)=>setTddDiemTrungBinh(ev.target.value)}
                placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            <button className='btn btn-primary' name='btnTddSave' onClick={(ev)=>tddHandleSubmit(ev)} >Ghi Lai</button>
            <button className='btn btn-danger' onClick={tddHandleClose}>Đóng lại</button>
        </form>
    </div>
  )
}
