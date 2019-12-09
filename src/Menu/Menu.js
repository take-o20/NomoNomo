import React, { Component } from "react";
import windowSize from 'react-window-size';
import "./Menu.css"
import drinkBig from "./Drink-big.png"
import cameUp from "./cameUp.png"
import soup from "./soup.png"
import soup2 from "./soup2.png"
import MenuInfo from "../MenuInfo/MenuInfo"
import Contact from "../Contact/Contact"
class Menu extends Component {
  render() {
    return (
      <div className="page-menu">
      {this.props.windowWidth < 650 ? 
        <div className="menu-head">
          <img src={cameUp} alt="tapioka" className="menu-photo"/>
          <p className="p2-menu" style={{fontSize: this.props.windowWidth*55/375}}>タピオカ<br/>ドリンク</p>
          <ul className="menu-item" style={{fontSize: this.props.windowWidth*30/375}}>
            <li className="menu-item-li">ミルクティー</li>
            <li className="menu-item-li">抹茶ラテ</li>
            <li className="menu-item-li">ほうじ茶ラテ</li>
            <li className="menu-item-li">ココア</li>
            <li className="menu-item-li">マンゴー</li>
            <li className="menu-item-li">ブルーハワイ</li>
          </ul>        
        </div>:
        <div className="menu-head">
          <img src={drinkBig} alt="tapioka" className="menu-photo-big"/>
          <p className="p2-bigMenu" style={{fontSize: this.props.windowWidth*0.1}}>タピオカ</p>
          <p2 className="p2-bigMenu-span" style={{fontSize: this.props.windowWidth*0.1}}>ドリンク</p2>
          <ul className="menu-item-big" style={{fontSize:this.props.windowWidth*0.065}}>
            <li className="menu-item-li">ミルクティー</li>
            <li className="menu-item-li">抹茶ラテ</li>
            <li className="menu-item-li">ほうじ茶ラテ</li>
            <li className="menu-item-li">ココア</li>
            <li className="menu-item-li">マンゴー</li>
            <li className="menu-item-li">ブルーハワイ</li>
          </ul>        
        </div>
      }        
        <div className="menu-detail">
          <h3 className="menu-message">今後も皆さんのリクエストに応じて<br/>
          ドリンクの種類を増やしていく予定です!!<br/><br/>
          お気軽にリクエストして下さい!!<br/><br/>
          </h3>
        </div>
        {this.props.windowWidth < 650?
        <div className="menu-soup">
          <img src={soup} alt="soup" className="soup-photo"/>
          <p className="soup-name">シェフの<br/>気まぐれスープ</p>
          <p className="soup-detail">季節や食材に合わせて、<br/>シェフがスープを作っています。
          <br/><br/>今日は何のスープか楽しみ!</p>
        </div>:
        <div className="menu-soup">
           <img src={soup2} alt="soup" className="soup-photo-big"/>
           <p className="soup-name-big0" style={{fontSize: this.props.windowWidth*0.1}}>シェフの</p>
           <p className="soup-name-big" style={{fontSize: this.props.windowWidth*0.1}}>気まぐれスープ</p>
           <p className="soup-detail-big0"style={{fontSize:this.props.windowWidth*0.045}}>季節</p>
           <p className="soup-detail-big1"style={{fontSize:this.props.windowWidth*0.045}}>や</p>
           <p className="soup-detail-big2"style={{fontSize:this.props.windowWidth*0.045}}>食材</p>
          <p className="soup-detail-big" style={{fontSize:this.props.windowWidth*0.045}}>に合わせて、シェフが<br/>スープを作っています。</p>
        </div>
        }
        <div>
        </div>
        <MenuInfo />
        <Contact />
      </div>
    )
  }
}

export default windowSize(Menu);