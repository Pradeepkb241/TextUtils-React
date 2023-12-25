import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

     setTimeout(() => {
        setAlert(null);
      }, 1000);
  }
  const toggleMode = ()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#040316';
      showAlert('Dark Mode has been enabled','success');
      document.title = 'TextUtil-Dark mode';

     }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');
      document.title='TextUtil -Light mode';
     }
  }
  return (
    <>
       {/* <BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About textUtils" mode ={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter text here to analyze" mode = {mode}/>}>
            
          </Route>
          <Route exact path="/about" element={<About />}>
            
          </Route>
      </Routes> */}
      <TextForm showAlert = {showAlert} heading = "Enter text here to analyze" mode = {mode}/>
      </div>
      {/* </BrowserRouter> */}
  
    </>
  );
}

export default App;
