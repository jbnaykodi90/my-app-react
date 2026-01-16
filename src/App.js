import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg : message,
        type : type
      }
    );

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    console.log('togglemode called');
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode changed','success');
    }else{
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode changed','success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" home="Home" about="About TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
         <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element = {<TextForm heading="Text Analyzer" label="Enter your text" mode={mode}/> }/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
