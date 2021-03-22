
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FileUploadAndProcess from './components/FileUploadAndProcess';

const App = () => {
  return (
    <div className="container mt-2 ml-1">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 p-2 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="header">
          <h1>HIQ File Processor</h1>
        </div>
        <div>
          <hr/>
          <br/>
          <p> <u>Upon uploading a text file:</u></p>
          <p> The most frequently used word will be identified.</p>
          <p> That word would be surrounded by 'foo' and 'bar' and the text would be shown below with the count of occurences</p>
         
          
          <FileUploadAndProcess></FileUploadAndProcess>

          <hr/>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;  