import React, { useState } from "react";
import Axios from 'axios';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * This component is responsible to retrieve the file from the user and invoke the .net API 
 * to find the most frequently used word 
 * in the file content and sarround that word with foo and bar.
 */
function FileUploadAndProcess() {

  //Initialize the required states

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [mostUsedWord, setMostUsedWord] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileSelectedHandler = event => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true)
    const fd = new FormData();
    fd.append('file', file, file.name);
    Axios.post('https://localhost:5001/Home/ReadAndProcessFile', fd)
      .then(res => {
        console.log(res);
        setText(res.data.text);
        setMostUsedWord(res.data.mostUsedWord);
        setFrequency(res.data.frequencies);
        setLoading(false)
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile02" 
              accept=".rtf,.txt,.md,.file"
              onChange={fileSelectedHandler} />
            <label className="custom-file-label" htmlFor="inputGroupFile02">
              {file
                ? file.name
                : 'Choose file..'}
            </label>
          </div>
          <div className="input-group-append">
            <button className="input-group-text" type="submit">Upload</button>
          </div>
        </div>
        {text ? (          
          <p className="most-used-word p-2 align:center">The most used word in the given file is: {mostUsedWord} <br /> Frequency of usage is: { frequency}</p>
        ) : (
            <div></div>
          )}
        <div className="container mt-3 overflow-auto">
          {text && !loading ? (
            <pre>{text}</pre>
          ) : (
              <p className="text-box-before"> {loading
                ? <div className="d-flex justify-content-center">
                  <div className="spinner-border text-success" role="status"></div>
                </div>
                : ''}</p>
            )}

        </div>
      </form>
    </div >
  );
}


export default FileUploadAndProcess;