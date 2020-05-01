import React from 'react';
import PropTypes from 'prop-types';
function Keg(props){

  const kegStyle={
    backgroundColor: "black",
    color: "rgb(175, 175, 175)",
  }
  const fixSpaceing={
    paddingTop: "20px",
  }
  return(
    <React.Fragment>
      <div className="col-md-4 container" style={kegStyle}>
        <div className="row" onClick={() => props.showDetails(props.id)}>
          <div className="col-md-8 container">
            <h3 onClick={props.showDetails} >{props.name}</h3>
            <p>By: {props.brand}</p>

          </div>
          <div className="col-md-4 container center">
            <p>Price: {props.price}</p>
            <p>Alc: {props.alcCont}</p>
          </div>
        </div>
        {
          props.pints > 0 &&
          <div className="row">
            <div className="col-md-6">
              <p style={fixSpaceing} >Pints lefts: {props.pints}</p>
            </div>
            <div className="centerBox col-md-6">
              <button className="button" onClick={() => props.sellPint(props.id)}>Sell Pint</button>
            </div>
          </div>
        }
        { 
          props.pints <= 10 && props.pints > 0 &&
          <p>This keg is almost empty!</p>
        }
        { 
          props.pints === 0 &&
          <p>This keg is empty.</p>
        }
      </div>
    </React.Fragment>
  );
}

Keg.propType = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcContent: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  pints: PropTypes.string,
  showDetails: PropTypes.func,
  sellPint: PropTypes.func
}
export default Keg;