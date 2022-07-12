// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";


import Contact from './pages/contact';
import Projects from './pages/projects';
import Home from './pages/home';
import AppLayout from './layouts/appLayout';

function App() {
  return (
  <div>
    <BrowserRouter>
    <AppLayout>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/projects" element={<Projects/>} />

      </Routes>
    
    </AppLayout>
    </BrowserRouter>  


  </div>
  );
}

export default App;
