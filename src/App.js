import React from 'react';
import Dropdown from './Dropdown'

const data = [
  {value: 1, name: 'A'},
  {value: 2, name: 'B'},
  {value: 3, name: 'C'}
]

const App = () => {
  return (
    <form onSubmit={() => {}}>
      <div className="container">
        <Dropdown options={data}/>
        <Dropdown options={data}/>
        <button type='submit'> 
          Search
        </button>
      </div>
    </form>
  );
}

export default App;
