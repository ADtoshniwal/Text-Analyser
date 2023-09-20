// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState('light') ; //weather dark mode is enabled or not 
  // const [alert , setAlert] = useState(null) ;

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark') ;
      document.body.style.backgroundColor = '#031e36' ;
      // showAlert("dark mode has been enabled " , "success ") ;
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white' ;
      // showAlert("light mode has been enabled " , "success ") ;
    }
    
  }
  // const showAlert= (message, type) =>{
  //   setAlert({
  //     msg : message ,
  //     type : type 
  //   })
  // }
  

  return (
    <>
    

    <Navbar title="TextUtilAdi" aboutText="about TextUtils" mode={mode} toggleMode={toggleMode}/>
     {/* <Alert alert={alert}/> */}
    <div className="container">
      <TextForm heading="Enter the text to analyse" mode={mode}/>
      {/* <About/> */}

    </div>
    </>
  );
}

export default App;
