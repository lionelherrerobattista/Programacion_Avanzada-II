import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = ({facultad}) => {
    const {titulo, carreras} = facultad;
    
    return ( 
      <div>
        <Header titulo = {titulo}></Header>
        <Content 
          carreras = {carreras}
        />
        <Total 
          carreras = {carreras}
        />     
      </div>
     );
  }

  export default App;