
import './App.css';
import TddListUsers from './components/TddListUsers';
import axios from './api/TddApi';
import { useEffect, useState } from 'react';

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


  return (
    <div className="container boder my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <TddListUsers renderTddListUsers={tddListUsers} />

    </div>
  );
}

export default App;
