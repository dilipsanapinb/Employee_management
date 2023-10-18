
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
