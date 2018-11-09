import React, { Component, Fragment } from 'react';
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.delete = this.delete.bind(this);
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

  // handleItemClick (index) {
  //   const list = [...this.state.list]
  //   list.splice(index, 1);
  //   // this.setState({
  //   //   list: list
  //   // })
  //   this.setState({list})
  // }

  handleDelete (list) {
    this.setState({list})
  }

  delete (index) {
    console.log('delete:' + index)
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({list})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
            <TodoItem
                handleDelete={this.handleDelete}
                delete={this.delete}
                key={index}
                content={item}
                index={index}
                list={this.state.list}
            />
        )
      })
    )
  }

  // 父组件通过属性向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数

  render() {
    return (
      // jsx语法
      <Fragment>
        {/* js表达式*/}
        {/*{ 1 + 2}*/}
        {/*hello world*/}
        {/*<input value={this.state.inputValue} type="text" onChange={this.handleInputChange.bind(this)}/>*/}
        <input value={this.state.inputValue} type="text" onChange={this.handleInputChange}/>
        {/*<button onClick={this.handleBtnClick.bind(this)}>add</button>*/}
        {/*<button style={{background: 'red', color: '#fff'}} onClick={this.handleBtnClick}>add</button>*/}
        <button className="redBtn" onClick={this.handleBtnClick}>add</button>
        <ul>
          {/*return <TodoItem handleDelete={this.handleDelete.bind(this)} delete={this.delete.bind(this)} key={index} content={item} index={index} list={this.state.list}/>*/}
          {/*return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item.name}</li>*/}
          { this.getTodoItems() }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
