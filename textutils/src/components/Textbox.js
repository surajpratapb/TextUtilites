import React ,{useState} from 'react'

export default function Textbox(props) {
    const[text,setText]=useState('');
    //const readTime=0.008*text.split(" ").length  // this wont allow to update the read time in real times


    // converts text to uppercase
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        //setText("You have clicked handleupclick")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper case","success");
    }
    // converts text to Lowecase
    const handleLoClick=()=>{
        console.log("Uppercase was clicked");
        //setText("You have clicked handleupclick")
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower case","success");
    }

    // produces text on textarea
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    // TTS function
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    // Stop TTS
    const cancelSpeech=()=>{
        speechSynthesis.cancel();
    }

    // Clear Text
    const clearText=()=>{
        let newText='';
        setText(newText)
    }

    // To remove extra spaces from text:
    const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords ='';
    console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    props.showAlert(" Extra Spaces Removed ","success");
    }

    // Alternative method using RegEx
    // const handleExtraSpaces=()=>{
    //     let newText=text.split(/[ ]+/);
    //     setText(newText.join(" "))
    // }

    // Copy to clipboard
    const copyText=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard ","success");
    }

  return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control border-2 shadow-sm p-3 mb-5" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#2B3035':'white'}} id="myBox" rows={6}>
                    </textarea>
                </div>
                
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={speak}>TTS</button>
                <button type="submit" className="btn btn-danger mx-2" onClick={cancelSpeech}>Stop TTS</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                

    </div>
    <div className="h4 pb-2 mb-4 text-grey border-bottom border-grey"></div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 font='sans-serif'>Your Text Summary</h1>
        <h3>Word Count</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <h2>Estimated Read Time</h2>
        <p>{0.008*text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Start Typing to see preview"}</p>

    </div>
    </>  
  )
}
