import './App.css';
import { useState } from 'react';
import InputWithClean from './components/inputwithclean';
import AlertButton from './components/cleanButton';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  
  // maybe some help functions to pass to children as props

  const clear= () => {
    alert(`Hello, ${name} ${surname}!`)
    setName('');
    setSurname('');
  }

  return (
    <div>
      <h1 style={{color:"red"}}>Lesson4</h1>
      <InputWithClean value={name} setValue={setName} placeholder="Enter your name" />
      <InputWithClean value={surname} setValue={setSurname} placeholder="Enter your surname" />
      <AlertButton clickButton={clear}/>
    </div>
  )
}

export default App;
