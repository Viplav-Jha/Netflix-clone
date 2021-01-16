import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
    <h1>Hey, this is netflix website</h1> 
    <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} />
    <Row title="Treanding now" fetchUrl={requests.fetchTrending} />
   

    </div>
  );
}

export default App;
