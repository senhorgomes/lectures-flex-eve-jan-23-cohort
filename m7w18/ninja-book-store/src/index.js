import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/Counter.css'
import NinjaBookStore from './component/NinjaBookStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="darkmode">

    <NinjaBookStore />
    </div>
);

