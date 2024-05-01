import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './components/screens/Home';

function App() {
  return (
    <>

<a href='home'>Home</a>  
 


<BrowserRouter>
  
  <Routes>

  <Route path='home' element={<Home />} />

  </Routes>

</BrowserRouter>

    </>
  )
}

export default  App;

