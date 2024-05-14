import React,{useEffect,useState} from 'react'

export default function TddUseEffect () {
    //state:count
    const [count, setCount] = useState(0);
    //hàm sử lý sự kiện click me
    const TddHandleClick = ()=>{
        setCount(prev => prev +1);
    }
    //sự dụng hàm useEffect để cập nhật lại title, có mộ tham số
    useEffect (()=>{
        document.title = `Trần Đăng Dương: You clicked ${count} times`;
        console.log('You clicked ${count} times');
    });
    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect (()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])
    //[deps]
    useEffect(()=>{
        console.log('useEffect count click: ', count);
    },[count])
  return (
    <div>
        <h2>Demo-UseEffect: You clicked {count} times</h2>
        <button onClick={TddHandleClick}>
            Click me
        </button>
    </div>
  )
}
