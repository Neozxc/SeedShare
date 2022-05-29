import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Component stuff
import Login from './components/Login';
// Container stuff
import Home from './container/Home';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}/>
      <Route path='/*' element={<Home />}/>
    </Routes>
  );
}

export default App;
