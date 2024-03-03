import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import NotfoundPage from './Pages/NotFoundPage';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} defaultRoute />
          <Route path='/product/:id' element={<ProductPage/>} /> 
          <Route path='*' element={<NotfoundPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
