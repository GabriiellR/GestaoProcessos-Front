import { Route, Routes, useLocation } from 'react-router-dom';
import PaginaPadrao from './Paginas/PaginaPadrao';

import './App.css';
import Login from './Paginas/Login.jsx/Login';
import InicioChamado from './Paginas/Chamados/InicioChamado';


export default (() => {
  const location = useLocation();
  return (<>
    <Routes location={location.pathname}>
      <Route path='/' element={<PaginaPadrao />}>
        <Route path='/' element={<InicioChamado />}></Route>
        <Route path='*' element={<div>Página não encontrada.</div>}></Route>
      </Route>

      <Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>
    </Routes>
  </>)
})
