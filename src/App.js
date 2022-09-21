
import Button from './components/Button';
import Counter from './components/Counter';
import Text from './components/Text';
import InputText from './components/InputText';
import Posts from './components/Posts';
import './App.css';
import { decrement, increment } from './store/reducers/CountSlice';

//Principios
//  Almacenamiento centralizado
//  Estados predecibles
//  Debuggleable
//  Flexible


function App() {
  return (
    <div className="App">
      <h1>Configuración redux en nuestro proyecto</h1>
      <Counter />
      <Button type={increment()}>Incrementar</Button>
      <Button type={decrement()}>Decrementar</Button>
      <Text />
      <InputText />
      <Posts />
    </div>
  );
}

export default App;
