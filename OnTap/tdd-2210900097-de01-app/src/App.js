import React, { useEffect, useState } from 'react'
import TddListTableName from './components/TddListTableName'
import axios from './tdd_apis/tdd-2210900097'
import TddFormTableName from './components/TddFormTableName'

export default function App() {
//Đọc dữ liệu từ api
const [tddListTableName,setTddListTableName] = useState([])
const tddGetTableName = async ()=>{
  let tddResp = await axios.get("tddTableName");
  console.log("App list:",tddResp.data);
  setTddListTableName(tddResp.data);
}

useEffect (()=>{
  tddGetTableName();
},[])


//hàm xóa
const tddHandleDelete= async (tddId)=>{
  let tddResp = await axios.delete("tddTableName/"+tddId);
  tddGetTableName();
}

const tddObjTableName ={
    "tddTbName": "",
    "tddTbEmail": "",
    "tddTbPhone": "",
    "tddTbStatus": false,
    "tddId": "2210900097"
};
  const [tddTableName,setTddTableName] = useState(tddObjTableName);
  //sửa thông tin
  //hoặc thêm mới
  const Add =()=>{
    tddGetTableName();
  }


  const tddHandleEdit =(tddObjEditTableName)=>{
    setTddTableName(tddObjEditTableName)         
  }
  //mở form giấu form
  const [showform,setShowform] =useState(false);
  const ShowAndHide =()=>{
    setShowform(!showform);
  }
  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Trần Đăng Dương:2210900097</h1>
      <hr />
      <TddListTableName renderTddListTableName={tddListTableName} onTddDelete={tddHandleDelete} onTddEdit={tddHandleEdit}/>
      <hr />
      <button onClick={ShowAndHide}>{showform?"Đóng": "Mở"}</button>
      {showform &&<TddFormTableName renderTddTableName={tddTableName} onTddAdd={Add} />}
    </div>
  )
}
