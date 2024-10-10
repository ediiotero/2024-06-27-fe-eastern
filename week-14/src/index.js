import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateCounter from './routes/StateCounter';
import StateColor from './routes/StateColor';
import StateSample from './routes/StateSample';
import ClickWord from './routes/ClickWord';
import PropSample from './routes/PropSample';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="color" element={<StateColor />}/>
        <Route path="count" element={<StateCounter />}/>
        <Route path="sample" element={<StateSample />}/>
        <Route path="word" element={<ClickWord />}/>
        <Route path="props" element={<PropSample />}/>
      </Routes>
    </BrowserRouter>,
  rootElement
);
