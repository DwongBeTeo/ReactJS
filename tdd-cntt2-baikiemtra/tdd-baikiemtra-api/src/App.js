
import './App.css'
import TddListSV from './components/TddListSV';
import axios from './api/TddApi';
import { useEffect,useState } from 'react';
import TddFormAddOrEdit from './components/TddFormAddOrEdit'; 

export default function App() {

  const [tddListSV,setTddListSV] =useState ([]);

  //đọc dữ liệu từ api
  const tddGetAllUsers = async () =>{
    const tddResponse  = await axios.get("tddSinhVien");
    console.log("Api Data:",tddResponse.data);
    setTddListSV(tddResponse.data)
  }

    useEffect(()=>{
      tddGetAllUsers();
      console.log("State Data:",tddListSV);
    },[])

    const [tddAddOrEdit, setTddAddOrEdit] = useState(false);
    const tddInitUser ={
      HoSV: "Trần Đăng ",
      TenSV: "Dương",
      NgaySinh: 19082004,
      NoiSinh: "NamDinh",
      MaKH : "CNTT",
      HocBong: "Không",
      id : "2210900097"
    }
    const [tddUser,setTddUser] = useState(tddInitUser);
    //hàm xử lý thêm mới
    const tddHandleAddNew = ()=>{
      setTddAddOrEdit(true);
    }
    const tddHandleClose =(param)=>{
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
          <TddFormAddOrEdit renderUsers={tddUser}
                        onclose={tddHandleClose}
                        onTddSubmitForm={tddHandleSubmit} />:"";
  return (
    <div className="container boder my-3">
      <h1>BaiKiemTra</h1>
      <hr />
      <TddListSV renderTddListSV={tddListSV}  onTddDelete={tddHandleDelete}/>
      <button className='btn btn-primary' name='btnTddThemMoi' onClick={tddHandleAddNew}>Them Moi</button>
      <hr/>
      {tddElementForm}
    </div>
  );
}




