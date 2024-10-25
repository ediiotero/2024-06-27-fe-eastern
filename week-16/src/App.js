import React from 'react'
import SiteNav from './components/SiteNav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import User from './pages/User';
import Error from './pages/Error';
import { Info } from './pages/Info';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <SiteNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about'>
          <Route index element={<About />} />
          <Route path=':userid' element={<User />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/info' element={<Info />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
