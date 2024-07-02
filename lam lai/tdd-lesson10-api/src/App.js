
import './App.css';
import TddListUsers from './components/TddListUsers';
import axios from './api/TddApi';
import { useEffect, useState } from 'react';
import TddFormAddOrEdit from './components/TddFormAddOrEdit';

function App() {

  const [tddListUsers,setTddListUsers] =useState ([]);

  //đọc dữ liệu từ api
  const tddGetAllUsers = async () =>{
    const tddResponse  = await axios.get("tddUsers");
    console.log("Api Data:",tddResponse.data);
    setTddListUsers(tddResponse.data)
  }

    useEffect(()=>{
      tddGetAllUsers();
      console.log("State Data:",tddListUsers);
    },[])

    const [tddAddOrEdit, setTddAddOrEdit] = useState(false);
    const tddInitUser ={
      UserName: "Trần Đăng Dương",
      PassWord: "19/08/2004",
      Email: "duongdangtran54321@gmail.com",
      Phone: "0828887204",
      id: "2210900097"
    }
    const [tddUser,setTddUser] = useState(tddInitUser);
    //hàm xử lý nút thêm mới

    const tddHandleAddNew =()=>{
      setTddAddOrEdit(true);
    }
    const tddHandleClose=(param)=>{
      setTddAddOrEdit(param);
    }
    const tddHandleSubmit =(param)=>{
      tddGetAllUsers();
      setTddAddOrEdit(param);
    }
    const tddHandleDelete =()=>{
      tddGetAllUsers(); 
    }
    let tddElementForm = tddAddOrEdit===true?
        <TddFormAddOrEdit renderUser={tddUser} 
                          onTddClose={tddHandleClose}
                          onTddSubmitForm={tddHandleSubmit} />:"";
  return (
    <div className="container boder my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <TddListUsers renderTddListUsers={tddListUsers} onTddDelete={tddHandleDelete} />
      <button className='btn btn-primary' name='btnTddThemMoi' onClick={tddHandleAddNew}>Them Moi</button>
      <hr/>
      {tddElementForm}
    </div>
  );
}

export default App;
