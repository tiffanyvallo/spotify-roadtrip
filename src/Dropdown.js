import React from 'react';

const data = [
  {value: 1, name: 'A'},
  {value: 2, name: 'B'},
  {value: 3, name: 'C'}
]

const Dropdown = () => {
  return (
    <select>
      {data.map((item, idx) => <option key={idx} value ={item.value}>{item.name}</option>)}
    </select>
  );
}

export default Dropdown;