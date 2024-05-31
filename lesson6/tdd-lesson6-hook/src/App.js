import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import TddListTask from './components/TddListTask';
import TddTaskAddOrEdit from './components/TddTaskAddOrEdit';

function App() {
  //mock data
  const tdd_listTasks = [
    { tdd_taskId:2210900097,tdd_taskName:"Trần Đăng Dương", tdd_level:"Small" },
    { tdd_taskId:2, tdd_taskName:"Học lập trình reactjs",tdd_level:"Medium"},
    { tdd_taskId:3, tdd_taskName:"Lập trình với Frontend - Reactjs",tdd_level:"High"},
    { tdd_taskId:4, tdd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",tdd_level:"Small"},
   ]
   //sử dụng hàm usestate của hook để lưu trữ trạng thái dữ liệu
   const [tddListTasks,setTddListTasks] = useState(tdd_listTasks);

   const tddHandleSubmit = (tddParam)=>{
    console.log("App:",tddParam);
    setTddListTasks(prev=>{
      return[
        ...prev,
        tddParam
      ]
   })
   }
  return (
    <div className="container border">
      <h1>Trần Đăng Dương</h1>
      <hr/>
      <div>
        {/* {danh sách list task} */}
        <TddListTask renderTddListTasks ={tddListTasks} />
      </div>
      <div>
        <TddTaskAddOrEdit tddOnSubmit={tddHandleSubmit} />
      </div>
    </div>
    
  );
}

export default App;
