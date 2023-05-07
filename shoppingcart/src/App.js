import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Login';
import Reg from './Reg';
import Dashboard from './Dashboard';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';
import { LoginContext } from './LoginContext';
import { useState } from 'react';
import Adminproduct from './Adminproducts';
import Adminproductadd from './Adminproductadd';
import Adminproductupdate from './Adminproductupdate';
function App() {
  const [loginname,setloginname]=useState(localStorage.getItem('loginname'))
  return ( 

    <Router>
      <LoginContext.Provider value={{loginname,setloginname}}>
     <Header/>
      <Routes>
       
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/adminproducts' element={<Adminproduct/>}></Route>
        <Route path='/adminproductadd' element={<Adminproductadd/>}></Route>
        <Route path='/adminproductupdate/:id' element={<Adminproductupdate/>}></Route>
      </Routes>
      <Footer/>
      </LoginContext.Provider>
    </Router>
    
    
    );
}

export default App;