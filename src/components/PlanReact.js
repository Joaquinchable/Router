import React from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';


function PlanReact(props) {
    const {
        match: { url }
     } = props;

    return (
        <div>
         <h1>React</h1>


        <Link to={`${url}/jsx`}>Jsx</Link>
        <br/>

        <Link to={`${url}/hooks`}>hooks</Link>
        <br/>


        </div>
    )
}

PlanReact.propTypes={
    match: PropTypes.shape({
    url: PropTypes.string
    })
}

export default withRouter(PlanReact)
