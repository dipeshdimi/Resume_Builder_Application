import './App.css';
import Input from './components/input.jsx';
import Output from './components/output.jsx';
import { useState } from 'react';

export default function App() {

  const [basic, setBasic] = useState({name: '', email: '', phone: '', linkedIn: '', github: ''});
  const [edu, setEdu] = useState([]);
  const [exp, setExp] = useState([]);
  
  const editBasic = (newBasic) => {
    setBasic(newBasic);
  }
  
  const editEdu = (newEdu) => {
    setEdu(newEdu);
  }
  
  const editExp = (newExp) => {
    setExp(newExp);
  }
  
  return (
    <>
      <h1>Resume Builder</h1>
      <div className="container">
          <Input editBasic={editBasic} edu={edu} editEdu={editEdu} exp={exp} editExp={editExp}/>
          <Output basic={basic} edu={edu} exp={exp}/>
      </div>
    </>
  )
}