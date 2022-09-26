import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import ColorPallets from './ColorPallets';

function App() {
  const [darkButton, setdarkButton] = useState("Enable Dark Mode");
  const [mode, setmode] = useState("light")
  const [myStyle, setmyStyle] = useState({
    backgroundColor : "white",
    color : "black"
  })
  const [navStyle, setnavStyle] = useState({
    backgroundColor : "#f8f9fa",
    color : "black"
  })
  const [palletsStyle, setpalletsStyle] = useState({
    color : "black"
  })
  const greenToggler = ()=>{
    if(palletsStyle.backgroundColor === "#05481a"){
      setpalletsStyle({
        backgroundColor : "white",
        color : "black"
      })
      setmyStyle({
        backgroundColor : "white",
        color : "black"
      })
      document.body.style.backgroundColor = "white";
    }
    else{
      setpalletsStyle({
        backgroundColor : "#05481a",
        color : "white"
      })
      setmode("black")
      setmyStyle({
        backgroundColor : "#05481a",
        color : "white"
      })
      setnavStyle({
        backgroundColor : "black",
        color : "white"
       })
       showAlert(" Custom Theme Applied !", "Success")
      document.body.style.backgroundColor = "#05481a";
    }
  }
  const pinkToggler = ()=>{
    if(palletsStyle.backgroundColor === "pink"){
      setpalletsStyle({
        backgroundColor : "white",
        color : "black"
      })
      setmyStyle({
        backgroundColor : "white",
        color : "black"
      })
      document.body.style.backgroundColor = "white";
    }
    else{
      setpalletsStyle({
        backgroundColor : "pink",
        color : "black"
      })
      setmyStyle({
        backgroundColor : "pink",
        color : "black"
      })
      showAlert(" Custom Theme Applied !", "Success")
      document.body.style.backgroundColor = "pink";
    }
  }
  const modeToggler = ()=>{
    if(myStyle.color === "black"){
     setmyStyle({
      backgroundColor : "#021024",
      color : "white"
     })
     setnavStyle({
      backgroundColor : "black" ,
      color : "white"
     })
     setpalletsStyle({
      color : "white"
     })
     setmode("black")
    //  document.title = "TextUtils - Dark Mode"
     document.body.style.backgroundColor = "#021024"
     showAlert(" Dark mode enabled", "Success")
     setdarkButton("Enable Light Mode")
    }
    else{
      setmyStyle({
        backgroundColor : "white",
        color : "black"
      })
      setnavStyle({
        backgroundColor : "#f8f9fa",
        color : "black"
       })
       setpalletsStyle({
        color : "black"
       })
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode enabled", "Success")
      setdarkButton("Enable Dark Mode")
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1800);
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" about="About" toggle={modeToggler} switch = {darkButton} myStyle={myStyle} navStyle={navStyle} mode={mode}/>
      <Alert alert={alert}/>
      <div className="my-3 mb-3">
      <ColorPallets style={palletsStyle} pinkToggler={pinkToggler} greenToggler={greenToggler}/>
      <TextForm heading="Enter your text below...." myStyle={myStyle} alert = {showAlert}/>
      </div>
    </div>

  );
}

export default App;
