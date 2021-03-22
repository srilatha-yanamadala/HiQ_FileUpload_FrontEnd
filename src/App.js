
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FileUploadAndProcess from './components/FileUploadAndProcess';

const App = () => {
  return (
    <div className="container py-3">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 p-2 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="header">
          <h1>File Processor</h1>
          <p>Find the most frequently used word</p>
        </div>
        <div>
          <p>This website will count the most used word in your text and add 'foo' + word + 'bar'</p>
          <FileUploadAndProcess></FileUploadAndProcess>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;  