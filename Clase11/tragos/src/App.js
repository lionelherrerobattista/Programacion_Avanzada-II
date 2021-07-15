import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListDrinks from './components/ListDrinks';
import CategoriasProvider from './context/CategoriasContext';
import CoctelesProvider from './context/CoctelesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <CoctelesProvider>
        <ModalProvider>
      <Header />
      <div className="container">
        <Formulario />
        <div className="row">
          <ListDrinks />
        </div>
      </div>
      </ModalProvider>
      </CoctelesProvider>
    </CategoriasProvider>
  );
}

export default App;
