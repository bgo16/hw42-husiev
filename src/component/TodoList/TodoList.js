import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, toggleItemColor } from './actions';

export default function TodoList() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      dispatch(addItem(inputText));
      setInputText('');
    }
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div>
        <input type='text' placeholder='Enter item' value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ color: item.color, cursor: 'pointer' }} onClick={() => dispatch(toggleItemColor(item.id))}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
