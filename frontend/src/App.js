import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from 'universal-cookie';
import {
  Product,
  Selector,
  Home,
} from "./pages";

function App() {

  const cookies = new Cookies();

  cookies.set('myCat', 'Pacman', { path: '/' });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} /> 
          
          <Route path="/howto" element={<Howto />} />
         
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> */}
          <Route path="/select" element={<Selector />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
