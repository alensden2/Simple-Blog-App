import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/registration' element={<Registration />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
