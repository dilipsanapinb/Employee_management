
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
