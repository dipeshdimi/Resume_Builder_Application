import './App.css';
import html2pdf from 'html2pdf.js';
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

  const handleDownload = () => {
    const element = document.getElementById('output');
  
    const pdfWidth = element.scrollWidth;
    const pdfHeight = element.scrollHeight;

    const options = {
      margin: 0,
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      jsPDF: {
        unit: 'px',
        format: [pdfWidth, pdfHeight],
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait'
      }
    };

    html2pdf().set(options).from(element).save();
  }
  
  return (
    <>
      <header className='heading'>
        <h1>Resume Builder</h1>
        <span className="material-symbols-outlined" onClick={handleDownload}>download</span>
      </header>
      <div className="container">
          <Input editBasic={editBasic} edu={edu} editEdu={editEdu} exp={exp} editExp={editExp}/>
          <Output basic={basic} edu={edu} exp={exp}/>
      </div>
    </>
  )
}