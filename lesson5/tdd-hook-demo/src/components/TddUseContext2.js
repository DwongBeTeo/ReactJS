import React,{useContext} from 'react'
import { ThemeContext } from './TddUseContext';

export default function TddUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
        <h2>TddUseContext2</h2>
        <p>
            <b>2210900097</b>
            <b>Trần Đăng Dương</b>
            <i>K22 CNTT2</i>
        </p>
    </div>
  )
}
