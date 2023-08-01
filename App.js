import './App.css';
import Login from './Login';
import Createac from './createac';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/createac"element={<Createac/>}/>
        <Route path="/Login"element={<Login/>}/>
      </Routes>
    </Router>
  );
}
export default App;