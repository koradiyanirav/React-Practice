import React, {useState} from "react";

export default function TextForm(props) {
  //Converts To Upper Case Text
    const UpperCase = () => {
        // console.log("clicked btn");
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Converted to UpperCase!","success");
      }
      
      //Converts To Lower Case Text
      const LowerCase = () => {  
        // console.log("clicked btn");
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("Converted to LowerCase!","success");
      }
      
      // Converts To Camel Case Text
      const camelCase = () => {
        let camelCaseText = text.split(' ')
          .map(function (word, index) {
            return word.charAt(0)
              .toUpperCase() + word.slice(1)
                .toLowerCase();
          })
          .join(' ');
        setText(camelCaseText);
        props.showAlert("Converted to First Letter CamelCase","success")
      };

      //Clear Text
      const ClearText = () => {
        // console.log("clicked btn");
        let NewText = '';
        setText(NewText);
        props.showAlert("Text Cleared!","warning");
    }

    //Converts To Change Case Text
    const ChangeCase = (event) => {
        console.log("Not Enter Letter");
        setText(event.target.value);
    }

    //Copy text
    const CopyText = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!","success") 
    }

    //Converts To Remove Extra Spaces
    const RemoveExtraSpaces = () => {
      var NewText = text.split(/[ ]+/);
      setText(NewText.join(' '));
      props.showAlert("Extra Spaces Removed!","success");
    }

    // Add extra spaces
    const AddExtraSpaces = () => {
      let NewText = text.split(" ");
      let newText = NewText.join(" ");
      
      let newArr = newText.split(/[ ]+/);
      // console.log(newArr);
      setText(newArr.join("                                                                                                                                                                                   "));
      props.showAlert("Extra Spaces Add!","warning");
  }


    const [text,setText] = useState('abcdefghijklmnopqrstuvwxyz  bcdefghijklmnopqrstuvwxyz  cdefghijklmnopqrstuvwxyz  defghijklmnopqrstuvwxyz  efghijklmnopqrstuvwxyz  fghijklmnopqrstuvwxyz  ghijklmnopqrstuvwxyz  hijklmnopqrstuvwxyz  ijklmnopqrstuvwxyz  jklmnopqrstuvwxyz  klmnopqrstuvwxyz  lmnopqrstuvwxyz  mnopqrstuvwxyz  nopqrstuvwxyz  opqrstuvwxyz  pqrstuvwxyz  qrstuvwxyz  rstuvwxyz  stuvwxyz  tuvwxyz uvwxyz  vwxyz  wxyz  xyz  yz  z');

  return (
    <>
      <div className="my-5 container">
        <h1 className="mb-2" style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>{props.heding}</h1>
        <div className="mb-3">
          <textarea rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'5px'}} onChange={ChangeCase} className="form-control fw-bolder" id="myId"></textarea>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={UpperCase}>Convert To Uppercase Text</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={LowerCase}>Convert To LowerCase Text</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={camelCase}>Convert To CamelCaseText</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={ClearText}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={CopyText}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} m-1`} onClick={AddExtraSpaces}>Add Extra Spaces</button>
        </div>
      </div>
      <div className="my-5 container">
        <h1 className="mt-3 text-center" style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>Your Text Summary</h1>
        <p style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}><b className="p-1">{text.split(/\s+/).filter((el)=>{return el.length!==0}).length}</b>Words & <b className="p-1">{text.length}</b>Characters</p>
        <p style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}> <b className="p-1">{0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length}</b> Minutes In Read</p>
        <h3 className="my-3 text-center" style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>Text Preview</h3>
        <p className="p-3 my-3" style={{backgroundColor:props.mode==='dark'?'white':'#1d2a35',color:props.mode==='dark'?'black':'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
