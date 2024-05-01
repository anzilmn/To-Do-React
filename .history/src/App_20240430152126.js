import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/screens/Home';

function App() {
  return (
    <>

<a href=''>Home</a>
<a href=''>Contact</a>
<a href=''>About</a>


<BrowserRouter>
  
  <Routes>

  <Route path='home' element={<Home />} />

  </Routes>

</BrowserRouter>

    </>
  )
}

export default  App;

