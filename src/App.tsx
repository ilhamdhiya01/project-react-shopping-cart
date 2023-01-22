import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import About from './about/AboutPage';
import Home from './home/HomePage';
import Store from './store/StorePag';
import { Container } from './components/Container';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <ShoppingCart />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
