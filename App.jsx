import { Routes, Route } from 'react-router-dom';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Escritas from './paginas/Escritas';
import Perfil from './paginas/Perfil'
import Registro from './components/Register';
import Register from './components/Register';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Login/>} />
          
       </Routes>
    </>
 );
};

export default App;