import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Film } from './pages/Film';
import { Home } from './pages/Home';

import './global.scss'
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="film/:id" element={<Film />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
