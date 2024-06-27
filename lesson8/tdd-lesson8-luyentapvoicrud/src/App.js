import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react'
import TddStudentList from './components/TddStudentList';
function App() {
  //mock data
  const tdd_listStudent = [
    { tdd_Id:2210900097,tdd_Name:"Trần Đăng Dương", tdd_Age:19,tdd_Phone:12345,tdd_Status:true },
    { tdd_Id:2, tdd_Name:"doanh", tdd_Age:19,tdd_Phone:12345,tdd_Status:false },
    { tdd_Id:3, tdd_Name:"doanhdz", tdd_Age:19,tdd_Phone:12345,tdd_Status:true },
    { tdd_Id:4, tdd_Name:"nam iu toto", tdd_Age:19,tdd_Phone:12345,tdd_Status:false },
  ];

  const [tddListTasks, setTddListTasks] = useState(data);
  
  return (
    <div className="container border">
      <h1>Trần Đăng Dương</h1>
        <hr/>
      <div>
        <TddStudentList renderTddListTasks ={tddListTasks}/>
      </div>
    </div>
  );
}

export default App;
