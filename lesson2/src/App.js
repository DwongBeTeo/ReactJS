import FuncTranDangDuong from './components/FuncTranDangDuong';
import ClassTranDangDuong from './components/ClassTranDangDuong';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo JSX</h1>
      {/* Function component Demo */}
      <FuncTranDangDuong />
      <FuncTranDangDuong fullName = "Trần Đăng Dương" age = "20" />
      <ClassTranDangDuong />
      <ClassTranDangDuong info = "HocReactJS" time = "20" />
    </div>
  );
}

export default App;
