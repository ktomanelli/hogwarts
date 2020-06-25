import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'

class App extends Component {
  state={
    filteredHogs:[],
    greased:false,
  }
  componentDidMount=()=>{
    this.setHogs(this.getHogs(''));
  }

  handleChange=(e)=>{
    if(e.target.name==='filter'){
      const filtered = this.state.greased
      this.setState({
        greased:!filtered,
      },()=>{
        if(this.state.greased){
          this.setHogs(this.getHogs('greased'))
        }else{
          this.setHogs(this.getHogs(''))
        }
      })
    }else if(e.target.name==='sort'){
      const stateValue = this.state[`${e.target.value}`]
      if(e.target.value==='name'){
        const sortedHogs = this.state.filteredHogs.sort((hog1,hog2)=>hog2.name<hog1.name);
        console.log(sortedHogs)
        this.setHogs(sortedHogs)

      }else{
        const sortedHogs = this.state.filteredHogs.sort((hog1,hog2)=>hog2.weight-hog1.weight);
        this.setHogs(sortedHogs)
      }
    }
  }

  getHogs=(filter)=>{
    let filteredHogs
    if(filter){
      filteredHogs = hogs.filter(hog=>{
        return hog[`${filter}`]
      })
    }else{
      filteredHogs = hogs
    }
    return filteredHogs
  }

  setHogs=(filteredHogs)=>{
    this.setState({
      filteredHogs:filteredHogs
    })
  }
  render() {
    return (
      <div className="App">
        <Nav handleChange={this.handleChange}/>
        <HogContainer hogs={this.state.filteredHogs}/>
      </div>
    );
  }
}

export default App;
