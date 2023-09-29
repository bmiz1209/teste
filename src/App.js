import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import QuemSomos from './pages/quemsomos/quemsomos';
import Contato from './pages/contato/contato';
import Grupo from './pages/grupo/grupo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={QuemSomos} path="/quemsomos" />
        <Route Component={Contato} path="/contato" />
        <Route Component={Grupo} path="/grupo-verse" />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
