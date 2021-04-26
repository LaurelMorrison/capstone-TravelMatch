import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'; 
import { TravelMatch } from './components/travelmatch'

ReactDOM.render(
  <React.StrictMode>
    <Router>    
      <TravelMatch />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

