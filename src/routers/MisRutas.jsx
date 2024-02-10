
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css'
import { Inicio } from '../components/Inicio'

import { Servicios } from '../components/Servicios'
import { Conocimientos } from '../components/Conocimientos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { NavHeader } from '../layout/NavHeader'
import { Footer } from '../layout/Footer'
import { Proyectos } from '../components/Proyecto';

export const MisRutas = () => {
  return (
    <div className='container-rutas'>
        <BrowserRouter>
        {/*Header y navegacion*/}
           <NavHeader/>
        {/*Contenido general*/}
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
            

         {/* Footer*/ }
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
