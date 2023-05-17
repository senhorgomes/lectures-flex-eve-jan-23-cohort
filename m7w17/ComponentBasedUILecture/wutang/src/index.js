import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import PlantList from './components/PlantList';
const object = {
  title: "Hey look its a counter!",
}
// Create an axios request, parse through the information, and then feed it to the children components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlantList />

    <Counter {...object}/>
    <Counter title={"Wu-Tang"} defaultValueOfClicks={6}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

