// Fragment用来处理根节点不唯一的情况
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

    // 代码优化
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
  // 拷贝data再进行修改 因为React不推荐直接修改数据 而是都通过setState的方式将变化后的数据保存在原数据中
  // 如果直接修改 可能会导致调bug变得困难 以及代码变得效率低下
  //   list.splice(index, 1);
  //   // this.setState({
  //   //   list: list
  //   // })
  // ES6中键和值一致可以省略'键:'
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

  // 代码优化 将代码循环的方法提炼出来 写在render函数外部
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
