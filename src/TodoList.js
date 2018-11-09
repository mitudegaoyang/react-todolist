import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

// 定义一个React组件
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick (index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    // this.setState({
    //   list: list
    // })
    this.setState({list})
  }

  handleDelete (list) {
    this.setState({list})
  }

  delete (index) {
    console.log('delete:' + index)
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({list})
  }

  // 父组件通过属性向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数

  render() {
    return (
      // jsx语法
      <div className="App">
        {/* js表达式*/}
        {/*{ 1 + 2}*/}
        {/*hello world*/}
        <div>
          <input value={this.state.inputValue} type="text" onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <TodoItem handleDelete={this.handleDelete.bind(this)} delete={this.delete.bind(this)} key={index} content={item} index={index} list={this.state.list}/>
                {/*return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item.name}</li>*/}
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
