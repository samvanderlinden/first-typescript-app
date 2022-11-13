import React from "react";

interface TodoListProps {
  items: {id: number, text: string}[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

export default TodoList