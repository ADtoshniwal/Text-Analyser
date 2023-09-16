import React ,{useState} from 'react'




export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text ) ;
        let newText = text.toUpperCase() ;

        setText(newText)
    }

    const handleLowClick = ()=>{
        // console.log("uppercase was clicked" + text ) ;
        let newText = text.toLowerCase() ;

        setText(newText)
    }
    const handleClear = ()=>{
        // console.log("uppercase was clicked" + text ) ;
        let newText = '';

        setText(newText)
    }
    const handleCopy = ()=>{
        
        navigator.clipboard.writeText(text) ;
  // Alert the copied text
        alert("Copied the text: " + text.value);
        
    }

    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance() ;
        msg.text = text ;
        window.speechSynthesis.speak(msg) ;
    }

    const handleExtraSpaces =()=>{
        setText(true) ;
        let temp = text ;
        temp = temp.replace(/\s+/g,' ') ;
        setText(temp);
    }
 

    const handleOnChange = (event)=>{
        // console.log("on change ") ;
        setText(event.target.value);
    }
    const [text, setText] = useState('');


  return (
    <>

    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#031e36'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#031e36'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy to clipboard</button>
        <button type=" submit" className="btn btn-primary mx-2" onClick={speak}> Text to Speech</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove extra spaces</button>
        
        <button className="btn btn-primary mx-2" onClick={handleClear}> Clear text</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#031e36'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} minutes will be needed to read the text you have entered </p>
        <p> {text.split('.').length - 1 } sentences and {text.split(" ").length}words </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something for text summary"}</p>
    </div>
    </>
  )
}
