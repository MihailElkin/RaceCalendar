import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RaceCalendar from './App';
import reportWebVitals from './reportWebVitals';
import raceStore from './store';
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
     <Provider store={raceStore}>
    <RaceCalendar />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
