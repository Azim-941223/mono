
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About, Home } from './pages/home';

const App:React.FC = () => {
  return (
    <div className='App'>

<Routes>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </div>
    </Routes>
    </div>
  )
}

export default App
