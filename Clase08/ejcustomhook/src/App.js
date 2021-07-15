import React from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';

function App() {

  const {data, loading, error} = useFetch( "https://jsonplaceholder.typicode.com/users/", []);
  const resultados = useFetch( "https://jsonplaceholder.typicode.com/todos/", []);

  return (
    <div className="App">
      <h1>Ejemplo Custom Hook</h1>
      <ul>
        {loading || data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <ul>
        {resultados.loading || resultados.data.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
