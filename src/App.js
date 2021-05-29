import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlanReact from './components/PlanReact';
import PlanRedux from './components/PlanRedux';
import SubTemaViejo from './components/subTemaViejo';
import Header from './components/Header';
import {RUTAS} from './helpers/constants'
import './App.css';

function App() {
  return (
    <BrowserRouter>
         <div className="margen">
            Hola Mundo!
         </div>
      <Header/>
      <Route  path={RUTAS.planReact} component={PlanReact} />
      <Route exact  path={`${RUTAS.planReact}/:subtema`} component={SubTemaViejo} />

      
      <Route exact path={RUTAS.planRedux} component={PlanRedux} />
      {/* RETO Generar los Subtemas de PLanRedux */}
    </BrowserRouter>
  );
}

export default App;
