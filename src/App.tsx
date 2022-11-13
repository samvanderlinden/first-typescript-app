import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{id: 1, text: "Finish Course"}];

  const todoAddHandler = (text:string) => {
    console.log('logging text from App.tsx component', text);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
