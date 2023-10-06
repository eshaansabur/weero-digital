import React from 'react';
//import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Porfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

//import routes, route, useLocation
import {Routes, Route, useLocation} from 'react-router-dom';
import Portfolio from '../pages/Portfolio';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
  </Routes>;
};

export default AnimRoutes;
