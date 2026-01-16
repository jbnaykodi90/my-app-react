import React, {useState} from 'react'


export default function TextForm(props) {

    const handleDownClick = () =>{
        console.log("Lowercase button was clicked on " + text);
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        setText('');
    }

    const handleUpClick = () =>{
        console.log("Uppercase button was clicked on " + text);
        setText(text.toUpperCase());
    }

    const handleResetClick = () =>{
        console.log("Reset button was clicked on " + text);
        setText("Enter text here");
    }

    const handleOnChange = (event) =>{//event will be passed by react
        console.log("On change");
        setText(event.target.value); //event.target.value is used so that we can edit the text and edited value will be set to text
    }

    //{useState} is hooks. Check react Hooks concept. Using Hooks we can define varialbles to store state
    const [text, setText] = useState('');
    //text = "Enter text here";   -> This way to set text variable is wrong as we need to use function
    //setText("Enter your text here");   //-> This way is correct
  return (
    <div style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style = {{color : props.mode === 'dark' ? 'white' : 'black', backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}}>
            <label htmlFor="myBox" className="form-label">{props.label}</label>
            <textarea className="form-control" onChange={handleOnChange} value = {text} id="myBox" rows="8"/>
        </div>
        <div className="container mb-5">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary ms-4" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary ms-4" onClick={handleResetClick}>Reset</button>
                <button className="btn btn-primary ms-4" onClick={handleClearClick}>Clear</button>
        </div>
    </div>
  )
}
