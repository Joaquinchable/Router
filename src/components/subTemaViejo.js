import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//HOC !== Hooks
function SubTemaViejo(props) {
    console.log('props: ', props);
   const {match : {
         params:{subtema}}} = props;
    return (
        <div>
        <p>
        {subtema}
       </p>
        </div>
    )
}

SubTemaViejo.propTypes = {
   match:PropTypes.shape({
     params:PropTypes.shape({
      subtema: PropTypes.string
     }) })}

export default  withRouter(SubTemaViejo);
