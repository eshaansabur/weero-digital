import React from 'react';
//import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
//import router
import { BrowserRouter as Router, Routes } from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
import Footer from './components/Footer';


const App = () => {
  return <div>
    <Header></Header>
    <AnimRoutes></AnimRoutes>
    <Footer></Footer>
  </div>;
};

export default App;
