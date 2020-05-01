import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import KegForm from "./KegForm";
import { Kegs } from "./../../PresetData/GasonsKegs";
import {connect} from "react-redux"

class KegController extends React.Component{
  constructor(props){
    super(props)
    this.state={
      formVisible: false,
      selectedKeg: null,
      kegList: Kegs
    }
  }
  //redux slices and return vals
  //1. toggleForm: bool | default false
  //2. selected keg: object | default {}
  //3. kegList: object full of objects | default {(prestData)}

  //actions:
  //1- toggle
  //2- SELECT_KEG ... CLEAR_SELECTED_KEG
  //3- ADD_KEG (has edit functionality).. (no remove functionality yet but this is where itd go)

  handleClick = () => {
    //checks if click is from details page to reset to initial state
    if(this.state.selectedKeg !== null) {
      this.setState({
        formVisible: false,
        selectedKeg: null,
      })
    } else {
      this.setState(prevstate => ({
        formVisible: !prevstate.formVisible
      }));
    }
  }

  handleAddNewKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      formVisible: false,
      kegList: newKegList
    })
  }

  handleChangeingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0]
    this.setState({
      selectedKeg: selectedKeg
    })
  }

  handleSellingPint = (id) => {
    const soldKeg = this.state.kegList.filter(keg => keg.id === id)[0]
    const newKegsPints = soldKeg.pints -1
    const newKeg = {...soldKeg, pints: newKegsPints}
    console.log("pints:", newKeg.pints)
    const removeOldKeg = this.state.kegList.filter(keg => keg.id !== id)
    const newKegList = removeOldKeg.concat(newKeg)
    this.setState({
      kegList: newKegList
    })
  }

  setVisiblitiy = () => {
    if(this.state.selectedKeg !== null) {
      return{
        component: <KegDetails keg={this.state.selectedKeg}/>,
        buttonText: "Back to Kegs"
      }
    } else if (this.state.formVisible){
      return{
        component: <KegForm onKegCreation={this.handleAddNewKeg}/>,
        buttonText: "Back to Kegs"
      };
    } else {
      return{
        component: <KegList 
        list={this.state.kegList} 
        onSelectingKeg={this.handleChangeingSelectedKeg}
        onSellingPint={this.handleSellingPint}
        />,
        buttonText: "Add New Keg"
      }
    }
  }
  render(){
    const backStyle={
      backgroundColor: "rgba(22, 22, 22, 0.342)",
      borderRadius: "10px",
      marginBottom: "3%",
      marginTop: "3%"
    }
    const currentlyVisible = this.setVisiblitiy()
    return(
      <React.Fragment>
        <div  className="container" style={backStyle}>
          {currentlyVisible.component}
          <div className="centerBox">
            <button className="buttondark" onClick={this.handleClick}>{currentlyVisible.buttonText}</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  formVisible: state.formVisible,
  kegList: state.kegList,
  selectedKeg: state.selectedKeg
})

KegController = connect(mapStateToProps)(KegController)

export default KegController;