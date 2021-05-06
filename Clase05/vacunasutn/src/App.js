import React, {useState} from 'react';
import './App.css';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Header from './components/Header';
import Lista from './components/Lista';

function App() {
  const [vacunas, setVacunas] = useState([
    {id:1, marca:"Sputnik V", precio: 1000},
    {id:2, marca:"AstraZeneca", precio: 1100},
    {id:3, marca:"Pfizer", precio: 900},
    {id:4, marca:"Spinopharm", precio: 1300},
    {id:5, marca:"Johnson", precio: 950},
  ]);

  const [carrito, setCarrito] = useState([]);

  return (
    <div className="container">
      <Header titulo={"Vacunas Reactivas"}/>
      <section className="principal">
        <Lista 
          titulo="Listado de vacunas"
          vacunas={vacunas}
          setCarrito={setCarrito}
          carrito={carrito}
        />
        <Carrito 
          titulo="Carrito de compras"
          setCarrito={setCarrito}
          carrito={carrito}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
