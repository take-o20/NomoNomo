import React, { Component } from "react";
import storePhoto from "./Store.png"
import "./Store.css"
import StoreInfo from "../StoreInfo/StoreInfo"
import Contact from "../Contact/Contact"
export default class Store extends Component {
  render() {
    return (
      <div className="page">
        <h2 className="h2-store"><span className="h2-store-tapioka">タピオカ </span>売ってます!!</h2>
        <div className="box19">
          <img src={storePhoto} alt="store" className="frame-after"/>
        </div>
        <div className="box18">
          <h2 className="h2-store-1">販売場所</h2>
          <h3 className="h3-store">早稲田大学キャンパス内</h3>
          <h3 className="h3-store">早稲田大学周辺道路</h3>
          <h3 className="h3-store">新宿駅東口</h3>
          <h3 className="h3-store">新宿駅東南口</h3>
          <h3 className="h3-store">水道橋</h3>
          <h3 className="h3-store">お台場</h3>
          <h3 className="h3-store">下北沢</h3>
          <div class="blank"></div>
          <h2 className="h2-store-1">営業時間</h2>
          <h3 className="h3-store">
            <span className="bigN">9 </span>
              時〜
            <span className="bigN">19 </span>
              時</h3>
        </div>
        <StoreInfo />
        <Contact />
      </div>
    )
  }
}