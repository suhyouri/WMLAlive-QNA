import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header'
import React from "react";
import Main from './component/Main'
import Modal from './component/Modal';
import EmptyPage from './component/EmptyPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/main" element={<Modal />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
