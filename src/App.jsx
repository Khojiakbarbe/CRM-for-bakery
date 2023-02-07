import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar';
import { DataProvider } from './components/ContextProvider/DataProvider';
import Xodimlar from './components/Xodimlar';
import XodimQoshish from './components/XodimQoshish';

import './app.css'
import Details from './components/Details';


function App() {
  return (
    <Router>
      <DataProvider>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Xodimlar />} />
          <Route path='/xodim/:id' element={<Details />} />
          <Route path='/yangiXodim' element={<XodimQoshish />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
