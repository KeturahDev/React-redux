import React from 'react';
import PropTypes from 'prop-types';
import Keg from "./Keg";

function KegList(props){
  return(
    <React.Fragment>
      <div className="row" >
        {
          props.list.map(keg => 
            <Keg
            name={keg.name} 
            price={keg.price} 
            pints={keg.pints} 
            brand={keg.brand} 
            id={keg.id}
            key={keg.id}
            alcCont={keg.alcoholContent}
            showDetails={props.onSelectingKeg}
            sellPint={props.onSellingPint}
            />
          )
        }
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onSelectingKeg: PropTypes.func,
  onPintSold: PropTypes.func
}

export default KegList;