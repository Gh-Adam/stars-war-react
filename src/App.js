import React, { useState } from 'react';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import Navbar from './components/Navbar';
import { ReactQueryDevtools } from 'react-query-devtools';
function App() {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className="app">
        <header className="app-header">
          <h2 className="title">Stars War Info</h2>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People />}
          </div>
        </header>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
