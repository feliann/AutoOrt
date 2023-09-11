import { Routes, Route } from 'react-router-dom';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Escritas from './paginas/Escritas';
import Perfil from './paginas/Perfil'
import Register from './components/Register';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Register/>} />
          
       </Routes>
    </>
 );
};

export default App;