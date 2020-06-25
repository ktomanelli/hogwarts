import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <div className="logo">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>
    <div className="filters">
      <form>
        <label>Name:</label>
        <input onChange={(e)=>props.handleChange(e)} type='radio' name='sort' value='name' />
        <label>Weight:</label>
        <input onChange={(e)=>props.handleChange(e)} type='radio' name='sort' value='weight'/>
        <label>Greased:</label>
        <input onChange={(e)=>props.handleChange(e)} type='checkbox' name='filter' value='greased'/>
      </form>
    </div>
    </div>
  );
};

export default Nav;
