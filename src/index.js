// 理解组件的语法(以大写字母开头引入的)
import React from 'react';
// 将组件渲染在HTML标签内
import ReactDOM from 'react-dom';
import './index.css';
// App组件，大写字母开头
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
