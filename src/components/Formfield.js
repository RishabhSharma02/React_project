import React,{useState} from 'react'

export default function Formfield(props) {
    const onClicked=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const HandleOnChange=(event)=>{
         setText(event.target.value);
         
    }
    const onClearClicked=(event)=>{
        setText("");
        props.showAlert("Cleared","success");
   }
  
   const onCapitalizeClicked=(event)=>{
    setText(text.charAt(0).toUpperCase()+text.slice(1));
   }
    
    
    const [text,setText]=useState("Enter text here")
  return (
    <>
    <h1>Enter text to analyse below</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={onClicked}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={onClearClicked}>Clear Text</button>
  <button className="btn btn-primary" onClick={onCapitalizeClicked}>Capitalize</button>
  <div className="container my-2 mx-">
    <h2> Text Summary </h2>
    <p>{text.split(" ").length} word and {text.length} characters</p>

   
  </div>
  </>
  )
}
