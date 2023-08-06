import './App.css';
import './components/Navbar'
import Formfield from './components/Formfield';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const[darkmode,setDarkMode]=useState("light");
  const [alert, setalert] = useState(null);
  const showAlert=(massg,type)=>{
        setalert({
          msg:massg,
          type:type
        }
        )
        setTimeout(() => {
          setalert(null);
        }, 1500);
  }
  const changemode=()=>{
    if(darkmode==='light'){
       setDarkMode('dark');
       showAlert("Dark mode has been enabled","success");
    }
    else{
      setDarkMode('light');
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About textutils" mode={darkmode} function={changemode}/>
   <Alert alert={alert}></Alert>
      <div className='container'>
      <Formfield showAlert={showAlert} ></Formfield>
      </div>
     
    </>
  );
}

export default App;
