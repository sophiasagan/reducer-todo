import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

import { todoReducer, initialState } from './reducers/todoReducer';

const App = () => {
  const [{ items }, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => {
    const newItem = {
      name: item,
      id: new Date(),
      completed: false,
      show: true
    };

    dispatch({ type: 'ADD_TODO', payload: newItem });
  };

  const clearTodo = () => {
    dispatch({ type: 'CLEAR_TODO' });
  };

  const toggleCompleted = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id });
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} clearTodo={clearTodo} />
        <TodoList
          todo={items}
          toggleCompleted={toggleCompleted}
          clearTodo={clearTodo}
        />
      </div>
    </div>
  );
};

export default App;