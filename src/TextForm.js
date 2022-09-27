import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("")
    const HandleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.alert(" Converted into UpperCase ", "Success")
    }
    const HandleLwClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.alert(" Converted into lowercase ", "Success")
  }
    const HandleClClick = ()=>{
      setText(" ")
      props.alert(" Text cleared ", "Success")
  }
    const HandleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      let text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.alert(" Copied to Clipboard !", "Warning")
    }
  return (
    <>
    <div id="box">
      <div className=" container mb-3" style={props.myStyle}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control" value={text} onChange={HandleOnChange}
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>Change to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLwClick}>Change to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleClClick}>Clear Text</button>
      <button disabled={text.length===0} type="button" className="btn btn-warning" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={props.myStyle}>
      <h1>Your Text Summary</h1>
      <p>{(text.split(" ").filter((element)=>{
      return element.length!==0}).length)} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>
    </>
  );
}
