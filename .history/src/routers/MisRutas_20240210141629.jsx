
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css'
import { Inicio } from '../pages/Inicio'
import { Servicios } from '../pages/Servicios'
import { Conocimientos } from '../pages/Conocimientos'
import { Contacto } from '../pages/Contacto'
import { Error } from '../components/Error'


import { Proyectos } from '../pages/Proyecto';

export const MisRutas = () => {
  return (
    <div className='container-rutas'>
        <BrowserRouter>
       
        <section className='content'>
          <Routes>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='/inicio' element={<Inicio/>}/>
                  <Route path='/servicios' element={<Servicios/>}/>
                  <Route path='/conocimientos' element={<Conocimientos/>}/>
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/proyecto/' element={<Proyectos/>}/> 
                  <Route path='*' element={<Error/>}/> 
          </Routes>
        </section>
            

        
        </BrowserRouter>
    </div>
  )
}
