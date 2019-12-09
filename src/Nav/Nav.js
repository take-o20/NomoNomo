import React, { Component } from "react";
import Slider from "react-slick";
import windowSize from 'react-window-size';
import "./Nav.css"
import Philosophy from '../Philosophy/Philosophy'
import Store from '../Store/Store'
import Menu from '../Menu/Menu'
import Info from "../Info/Info"
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      activeSlide: 0,
      activeSlide2: 0,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const windowWidth=this.props.windowWidth;
    const windowHeight=this.props.windowHeight;
    const settings = {
      className: "slider1",
      asNavFor: this.state.nav2,
      ref: slider => this.slider1=slider,
      initialSlide: 0,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      // slidesToShow: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next}),
      afterChange: current => this.setState({activeSlide2: current})
    };
    const settings2 = {
      asNavFor: this.state.nav1,
      ref: slider => this.slider2 = slider,
      slidesToShow: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      useCSS:true,
    }
    return (
      <div >
        <Slider {...settings}>
          <div style={{width: windowWidth/2.5}}>
            <h3 className={
              this.state.activeSlide ===0 ?
              "nowNav": "nav"
              }
            >Philosophy</h3>
          </div>
          <div style={{width: windowWidth/2.5}}>
            <h3 className={
              this.state.activeSlide ===1 ?
                "nowNav": "nav"
              }
            >Menu</h3>
          </div>
          <div style={{width: windowWidth/2.5}}>
            <h3 className={
              this.state.activeSlide ===2 ?
                "nowNav": "nav"
              }
            >Store</h3>
          </div>
        </Slider>
        <Slider {...settings2} className="slider-back">
          <div>
            <Philosophy />
          </div>
          <div>
            <Menu />
          </div>
          <div>
           <Store />
          </div>
        </Slider>
      </div>
    )
  }
}

export default windowSize(Nav)