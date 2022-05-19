import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import './i18n';
import i18n from "i18next";


function App() {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }
  return (
    <div className="App">
      <div className="App-header">
          <BrowserRouter>
              <div>
              <button style={{marginRight: 10}} onClick={() => changeLanguage('ro')}>Ro</button>
              <button onClick={() => changeLanguage('en')}>Eng</button>
              </div>
              <Routes>

                  <Route path="/" element={<Home />} />

                  <Route path="/about"  element={<About />} />


              </Routes>
          </BrowserRouter>



      </div>
    </div>
  );
}

export default App;
