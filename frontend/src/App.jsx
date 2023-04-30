import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>path='/', element={<Home />}</Route>
          <Route>path='/login', element={<Login />}</Route>
          <Route>path='/login', element={<Registration />}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
