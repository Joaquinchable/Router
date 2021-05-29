import React from 'react';
import { Link } from 'react-router-dom';
import { RUTAS } from './../helpers/constants';
function Header() {
    return (
        <div>
        <Link to={RUTAS.inicio}>Inicio</Link>
        <br/>

        <Link to={RUTAS.planReact}>React</Link>
        <br/>

        <Link to={RUTAS.planRedux}>Redux</Link>
      </div>
    )
}

export default Header
