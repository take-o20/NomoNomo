import React, { Component } from "react";
import "./Head.css"
import headPhoto from "./HeadPhoto.png"
import windowSize from 'react-window-size';

class Head extends Component{
  render (){
    return (
      <div>
        {/* <h1 className="h1-head">
          Nomo<sup>2</sup>
        </h1> */}
        <h1 className="nomo"
          style={{left:this.props.windowWidth/2-50-120}}>Nomo</h1>
        <img src={headPhoto} alt="head photo"
        className="head-photo"
        style={{marginLeft:this.props.windowWidth/2-50}}/>
        <h1 className="nomo1"
          style={{right:this.props.windowWidth/2-50-120}}>Nomo</h1>
      </div>
    );
  }
}
export default windowSize(Head);