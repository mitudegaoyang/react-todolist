/**
 * Created by gaotianyang on 2018/11/9.
 */
import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleDelete () {
    // 方法一：传list回父组件
    const list = this.props.list;
    list.splice(this.props.index, 1);
    this.props.handleDelete(list);
  }

  delete () {
    // 方法二：常规方法
    console.log(this.props.index);
    this.props.delete(this.props.index);
  }

  render() {
    const {content} = this.props;
    return (
        <div>
          {/*<div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>*/}
          {/*<div onClick={this.handleDelete}>{this.props.content}</div>*/}
          {/*<div onClick={this.delete.bind(this)}>{this.props.content}</div>*/}
          <div onClick={this.delete}>{content}</div>
        </div>
    )
  }

}

export default TodoItem;
