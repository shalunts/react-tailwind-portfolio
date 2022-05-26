import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Works, About, Contact, NotFound } from './pages';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <main className='container mx-auto max-w-7xl'>
          <Routes>
            <Route path='/' element={<Works />} />
            <Route path='/about' element={<About />} />
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
