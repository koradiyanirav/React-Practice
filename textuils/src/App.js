import { useState } from "react";
import Alert from "./Alert";
import About from "./About";
import "./App.css";
import Navbar from "./navbar";
import TextForm from "./TextForm";

function App() {
  
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (Message,type) => {
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000); 
  }

  const toggleMode = () => {
    if( mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#1d2a35';
      document.getElementById('flexSwitchCheckDefault').style.backgroundColor = '#212529';
      document.getElementById('searchform').style.backgroundColor = '#212529';
      document.getElementById('searchform').style.color = '#fff';
      document.getElementById('SwitchCheckDefault').innerHTML = 'Enable Dark Mode';
      showAlert("Light Mode Has Been Enabled ","success");
    }else{
      setmode('light')
      document.body.style.backgroundColor = '#fff';
      document.getElementById('searchform').style.backgroundColor = '#fff';
      document.getElementById('searchform').style.color = '#212529';
      document.getElementById('flexSwitchCheckDefault').style.backgroundColor = '#fff';
      document.getElementById('SwitchCheckDefault').innerHTML = 'Enable Light Mode';
      showAlert("Dark Mode Has Been Enabled ","success");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <TextForm showAlert={showAlert} heding="Conveter Letter" mode={mode}/>
      <About mode={mode}/>
    </>
  );
}

export default App;
