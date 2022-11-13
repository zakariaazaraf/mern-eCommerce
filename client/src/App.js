import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Community } from './components/Community'
import { Contacts } from './components/Contacts'
import { Guarantee } from './components/Guarantee'
import { MadeToFade } from './components/MadeToFade'
import { Shipping } from './components/Shipping'
import { Shop } from './components/Shop'
import { Product } from './components/Product'
import { AddProduct } from './components/AddProduct'
import { Shopping } from './components/Shopping'
import { AddUser } from './components/AddUser'
import { ManageProducts } from './components/ManageProducts'


function App() {
  return <Router>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/community' element={<Community />}/>
    <Route path='/contacts' element={<Contacts />}/>
    <Route path='/guarantee' element={<Guarantee />}/>
    <Route path='/made-to-fade' element={<MadeToFade />}/>
    <Route path='/shipping' element={<Shipping />}/>
    <Route exact path='/shop' element={<Shop />}/>
    <Route exact path='/shopping' element={<Shopping />}/>
    {/* Products routes CRUD */}
    <Route path='/products/:productId' element={<Product />}/>
    <Route path='/products/new' element={<AddProduct />}/>
    <Route path='/category/:categoryId' element={<Home />}/>
    <Route path='/images/:imageId' element={<Home />}/>
    {/* Users's CRUD routes */}
    <Route path='/users/new' element={<AddUser />}/>
    {/* Testing the manage product component */}
    <Route path='/products/manage' element={<ManageProducts />}/>
    <Route path='/*' element={<Home />}/>
  </Routes>
</Router>
}

export default App;
