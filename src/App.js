import './App.css';
import Header from './Header';
import Home from './Home';
import Banner from './Banner';
import Footer from './Footer';
import './Footer.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPage from './SearchPage' 


function App() {    
  return (
    <div className="App">

       <Header />
       <Banner />
    
      <BrowserRouter >
      <Routes>

       <Route path='/search' element={<SearchPage/>}/>
       <Route path='/' element={<Home />}/>
       
       </Routes>
       </BrowserRouter>

       <Footer />

    </div>
  );
}

export default App;
   