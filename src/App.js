import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Projects, Skills, Contact, NotFound } from './pages';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <main className='container mx-auto max-w-7xl py-5 px-2 sm:px-6 lg:px-0'>
          <Routes>
            <Route exact path='/' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
