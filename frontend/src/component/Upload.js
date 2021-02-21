import React, { useState } from 'react';

function Upload() {
  const [ imgBase64, setImgBase64] = useState(""); 
  const [ imgFile, setImgFile] = useState(null);	
  
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {

      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); 
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); 
      setImgFile(event.target.files[0]); 
    }

    console.log(imgFile)
  }
  
  return (
    <div className="App">
        <img src = 'dog.jpg'/>
      <div>
        <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
      </div>
    </div>
  );
}

export default Upload;