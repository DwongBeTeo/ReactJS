import React, { Component } from 'react'
import TddProductlist from './components/TddProductlist';
import TddProductAdd from './components/TddProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Trần Đăng Dương', id: 2210900097, status:1 },
        { title: 'Cabbage', id: 1, status:1  },
        { title: 'Garlic', id: 2, status:0  },
        { title: 'Apple', id: 3, status:1  },
        { title: 'Samsung', id: 4, status:0  },
      ]
    }
  }
  tddHandleSubmit = (param)=> {
    console.log("App:",param);
    //thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Trần Đăng Dương - Render Data - Event Form</h1>
        <hr/>
        <TddProductlist renderProducts={this.state.products}/>
        <hr/>
        <TddProductAdd onSummit={this.tddHandleSubmit}/>
      </div>
    )
  }
}
