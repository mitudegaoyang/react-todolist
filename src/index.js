// 理解组件的语法(以大写字母开头引入的)
import React from 'react';
// 将组件渲染在HTML标签内
import ReactDOM from 'react-dom';
import './index.css';
// App组件，大写字母开头
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
