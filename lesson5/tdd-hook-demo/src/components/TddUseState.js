import React,{useState} from 'react'

export default function TddUseState() {
     // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    //mảng
    const [list, setList]=useState([1,5]);
    //hàm sử lý sự kiện thêm ngẫu nhiên
    const tddHandleList=()=>{
      //sinh ngẫu nhiên một giá trị số
      let num = parseInt(Math.random()*100);
      //cập nhật lại state:list
      setList([
        ...list,
        num
      ])
    }
  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr />
      <h3>List: {list.toString()}</h3>
      <button onClick={tddHandleList}>Thêm ngẫu nhiên</button>
    </div>
  );
}
