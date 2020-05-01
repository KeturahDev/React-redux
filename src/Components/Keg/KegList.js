import React from 'react';
import PropTypes from 'prop-types';
import Keg from "./Keg";

// alphabeticalList.map(keg =>  
function KegList(props){
  // const alphabeticalList = props.list.sort((a, b) => {
  //   const textA = a.name.toUpperCase();
  //   const textB = b.name.toUpperCase();
  //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  //   }); 
  return(
    <React.Fragment>
      <div className="row"  >
        {
          Object.values(props.list).map(keg => 
            <Keg
            name={keg.name} 
            price={keg.price} 
            pints={keg.pints} 
            brand={keg.brand} 
            description={keg.description} 
            alcoholContent={keg.alcoholContent} 
            id={keg.id}
            key={keg.id}
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