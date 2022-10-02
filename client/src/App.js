import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'


function App() {
  return <Router>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/products' element={<Home />}/>
    <Route path='/categories' element={<Home />}/>
    <Route path='/product/:productId' element={<Home />}/>
    <Route path='/category/:categoryId' element={<Home />}/>
    <Route path='/images/:imageId' element={<Home />}/>
    <Route path='/*' element={<Home />}/>
  </Routes>
</Router>
}

export default App;
