import React, {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import Task1 from './Tasks/task-1';
import Task2 from './Tasks/task-2';
import {Task3, PrivateRoute} from './Tasks/task-3';
import Task4 from './Tasks/task-4';

export default function App() {
  const [isOddNumber, setisOddNumber] = useState(false);
  const navigate = useNavigate();

  function changeHandler(e) {
    let number = Math.floor(e.target.value);
    console.log(number);
    if (number % 2 !== 0) {
      setisOddNumber(true);
    } else {
      setisOddNumber(false);
    }
  }

  function checkboxHandler(e) {
    if (e.target.checked) {
      navigate('/subtask4');
    } else {
      navigate('/');
    }
  }

  return (
    <div className='App'>
      <h2>The topic 'Routes'</h2>
      <Link to='/subtask3'>Show protected information if</Link>
      <span>&nbsp;</span>
      <input
        size='5'
        type='number'
        id='number-input'
        onChange={changeHandler}
      ></input>{' '}
      is odd
      <div className='mainClass'>
        Go to the component programmatically, by checking the box:{' '}
        <input type='checkbox' onClick={checkboxHandler}></input>
      </div>
      <Routes>
        {/* 1 */}
        <Route path='/subtask1'>
          <Route path=':id' element={<Task1 />} />
        </Route>
        {/* 2 */}
        <Route path='/subtask2' element={<Task2 />}></Route>
        {/* 3 */}
        <Route element={<PrivateRoute isOddNumber={isOddNumber} />}>
          <Route path='/subtask3' element={<Task3 />} />
        </Route>
        {/* 4 */}
        <Route path='/subtask4' element={<Task4 />}></Route>
      </Routes>
    </div>
  );
}
