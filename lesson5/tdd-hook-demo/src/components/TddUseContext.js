import React,{createContext,useContext, useState} from 'react'
import TddUseContext1 from './TddUseContext1';

export const ThemeContext = createContext (); //tạo ngữ cảnh để chia sẻ

export default function TddUseContext() {
    //state
    const [theme,setTheme] = useState('red');
    //hàm thay đôi theme
    const tddHandleChange =() =>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
        <ThemeContext.Provider values = {theme}>
        <div>
            <h2>Demo useContext</h2>
            <TddUseContext1 />
            <button onClick={tddHandleChange}>Change BG color </button>
        </div>
        </ThemeContext.Provider>
  ) 
}
