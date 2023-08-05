import './App.css';
import './components/Navbar'
import Formfield from './components/Formfield';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About textutils"/>
      <div className='container'>
      <Formfield ></Formfield>
      <About></About>
      </div>
     
    </>
  );
}

export default App;
