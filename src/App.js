import logo from './logo.svg';
import './App.css';
import Saludo from './Saludos'
import Despedida from './Despedida'
import Coches from './Coches';


function App() {
  const isLog = true;



  return (
    <div className="App">
      <header className="App-header">     
       {isLog ?(
        <Saludo nombre = "Juanma"></Saludo>
       ) :(
        <Despedida nombre = "Juanma"></Despedida>
       )
      }
      <div class="StyledTextComponent"><Coches></Coches></div>
       </header>
    </div>
  );
}

export default App;
