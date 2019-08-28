import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.components.js'
// import logo from './logo.svg';
import './App.css';
import {SearchBox} from './components/search-box/search-box.components.js'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };

    // 改变handleChange的this指向
    // 此处的this指向class App
    // this.hanndleChange = this.hanndleChange.bind(this);
  }

  componentDidMount(){
    // 执行‘fetch('https://jsonplaceholder.typicode.com/users')’后拿到返回值 => [[PromiseValue]]: Response
    // console.log(fetch('https://jsonplaceholder.typicode.com/users'));
      // .then(response => console.log(response.json()))
      // .then(users => console.log(users))
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  // 箭头函数会改变指向
  hanndleChange = e => {
    // 第二个参数：前一事件执行完成后 => 回调
    this.setState({searchField:e.target.value},() =>
            console.log(this.state.searchField))
  }

  render(){
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        hanndleChange={this.hanndleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
