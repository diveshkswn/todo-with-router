import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { AddTodoPage } from './pages/AddTodoPage/AddTodoPage';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <div className="App">

        <Routes>

          <Route path="home" element={<Homepage />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>

      </div>
    </ContextProvider>
  );
}

export default App;
