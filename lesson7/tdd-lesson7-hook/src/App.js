import './App.css';
import { React ,useState} from 'react'
import TddListTask from './components/TddListTask';
import TddTaskAddOrEdit from './components/TddTaskAddOrEdit';

function App() {

    //mock data
    const tdd_listTasks = [
      { tdd_taskId:2210900097,tdd_taskName:"Trần Đăng Dương", tdd_level:"Small" },
      { tdd_taskId:2, tdd_taskName:"Học lập trình reactjs",tdd_level:"Medium"},
      { tdd_taskId:3, tdd_taskName:"Lập trình với Frontend - Reactjs",tdd_level:"High"},
      { tdd_taskId:4, tdd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",tdd_level:"Small"},
    ];
    
 
  //sử dụng hàm usestate của hook để lưu trữ trạng thái dữ liệu
  const [tddListTasks,setTddListTasks] = useState(tdd_listTasks);
    
    //tạo state dữ liệu cho form(add, edit)
    const tddTaksObj={
      tdd_taskId:0, 
      tdd_taskName:"NTU",
      tdd_level:"Medium"
  };
    //taoj state
    const [tddTask,setTddTask] = useState(tddTaksObj);//dữ liệu trên form
      // state đê phân biệt trạng thái là thêm mới hay sửa
  const [tddIsAddOrEdit, setTddIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

    //nhận dữ liệu khi sửa
    const tddHandleEdit =(param)=>{
      console.log("App-Edit:",param);
      //cập nhật lại tddTask
      setTddTask(param);
      // Cập nhật trạng thái form là sửa
    setTddIsAddOrEdit(false);
    };

    const tddHandleSubmit = (tddParam) => {
    console.log("App:", tddParam);
    if (tddIsAddOrEdit === true) { // trường hợp thêm mới dữ liệu
      setTddListTasks((prev) => {
        return [...prev, tddParam];
      });
    } else { // Trường hợp sử dữ liệu
      for (let i = 0; i < tddListTasks.length; i++) {
        if (tddListTasks[i].tdd_taskId == tddParam.tdd_taskId) {
          tddListTasks[i] = tddParam;
          break;
        }
      }
      // Cập nhật lại state (tddListTasks)
      setTddListTasks((prev) => {
        return [...prev,];
      });
    }
    }
    // Hàm xóa
    const tddHandleDelete = (param) => {
      let tddResult = tddListTasks.filter(x => x.tdd_taskId !== param.tdd_taskId);
      setTddListTasks(tddResult);
    };

    return (
      <div className="container border">
        <h1>Trần Đăng Dương</h1>
        <hr />
        <div>
          {/* {danh sách list task} */}
          <TddListTask renderTddListTasks={tddListTasks}
            onTddTaskEdit={tddHandleEdit}
            onTddTaskDelete={tddHandleDelete} />
        </div>
        <div>
          <TddTaskAddOrEdit
            renderTddIsAddOrEdit={tddIsAddOrEdit}
            renderTddTask={tddTask}
            tddOnSubmit={tddHandleSubmit} />
        </div>
      </div>

    );
  }

export default App;
