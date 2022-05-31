import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

// Component stuff
import Login from './components/Login';
// Container stuff
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path='login' element={<Login />}/>
      <Route path='/*' element={<Home />}/>
    </Routes>
  );
}

export default App;
