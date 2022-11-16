import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/views';
import Contact from './components/views/contact';
import Product from './components/views/product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/product/:id'} element={<Product/>}/>
        <Route path={'/contact-us'} element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
