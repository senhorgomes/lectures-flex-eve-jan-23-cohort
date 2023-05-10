import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloComponent from './components/HelloComponent';
import Mood from './components/Mood';
import Counter from './components/Counter';
import Form from './components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloComponent studentName="Kevin"/> */}
    {/* <HelloComponent studentName="Henry"/> */}
    <Mood name="Di" mood="happy" />
    <Mood name="Daniel" mood="mad" />
    <Counter />
    <Form />
  </React.StrictMode>
);
