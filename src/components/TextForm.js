import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase !','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase !','success');
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Cleared Text!','success');
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard!','success');

    }

    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra space Removed!','success');
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text , setText]= useState("");
    return (
        <>
        <div className='container' style={{color: props.mode ==='dark'? 'white':'#040316'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? 'grey':'white',color: props.mode ==='dark'? 'white':'#040316'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'? 'white':'#040316'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} character</p>
            <p>{0.008 * text.split(' ').length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
