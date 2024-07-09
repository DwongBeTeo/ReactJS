import React from 'react'
import axios from '../api/TddApi';

export default function TddListSV({renderTddListSV,onTddDelete}) {
    console.log("TddListSV:",renderTddListSV);
     //hiển thị dữ liệu
     let tddElementUsers = renderTddListSV.map((tddSinhVien,index)=>{
        return(
            
                <tr>
                    <th>{tddSinhVien.id}</th>
                    <th>{tddSinhVien.HoSV}</th>
                    <th>{tddSinhVien.TenSV}</th>
                    <th>{tddSinhVien.NgaySinh}</th>
                    <th>{tddSinhVien.NoiSinh}</th>
                    <th>{tddSinhVien.MaKH}</th>
                    <th>{tddSinhVien.HocBong}</th>
                    <th>{tddSinhVien.DiemTrungBinh}</th>
                    <th>
                        <button className='btn btn-danger' onClick={()=>tddhandleDelete(tddSinhVien)}>Xoa</button>
                    </th>
                </tr>
            
        )
    })
    const tddhandleDelete= async (param)=>{
        if(window.confirm('bạn có muốn xóa không?')){
            const tddRes =await axios.delete("tddSinhVien/"+param.id);
        }
        onTddDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
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
