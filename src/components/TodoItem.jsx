import React from 'react';

const TodoItem = ({ todo, index, onToggle, onDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <span
        onClick={() => onToggle(index)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onToggle(index)} style={{ marginRight: '5px',color: 'green' }}>
      ✔
      </button>
      <button onClick={() => onDelete(index)} style={{ color: 'red' }}>
      ❌
      </button>
    </li>
  );
};

export default TodoItem;