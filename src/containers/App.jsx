import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login"
import Register from '../pages/Register';
import BusRegister from '../pages/BusRegister';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/busregister' element={<BusRegister/>}/>

            </Routes>
        </BrowserRouter>
     );
}

export default App;