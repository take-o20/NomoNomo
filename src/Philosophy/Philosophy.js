import React,{Component} from 'react';
import "./Philosophy.css"
import Head from "./Head.png"
import Info from "../Info/Info"
import Contact from "../Contact/Contact"

export default class Philosophy extends Component {
  render(){
    return (
      <div className="page">
        <h2 className="h2-philosophy">楽しみを届ける DrinkShop</h2>
        <img src={Head} alt="" className="Head"/>
        <div className="mission">
          <h2 className="mission-top">Mission</h2>
            <h3 className="mission-idea1">人々の「楽しみ」に寄り添い、</h3>
            <h3 className="mission-idea2">日々の生活を豊かに。</h3>
        </div>
        <div className="vision">
          <h2 className="vision-top">Vision</h2>
            <h2 className="vision-element">事業 
              <span className="vision-span">新旧融合</span>
            </h2>
            <div className="vision-text">
              <p>
                新しい価値観にも古い価値観にも必ず良さがあると思います。<br/><br/>
                それらの価値観を掛け合わせることで、独自の魅力を生み出します。<br/>
              </p>
            </div>
            <h2 className="vision-element">組織 
              <span className="vision-span">「夢×夢」の最大化</span>
            </h2>
            <div className="vision-text">
              <p>
              各メンバーが持つ " 人生の夢 " へと繋がる経験と価値を生み出せる環境を作ります。<br/>
              </p>
            </div>
        </div>
        <div className="value">
          <h2 className="value-top">Value</h2>
           <h2 className="value-element">誠実</h2>
            <p className="value-text">公平公正な判断をし、誠実な行動を心がけること</p>
           <h2 className="value-element">信頼</h2>
            <p className="value-text">信頼し合うことで生まれる絆で責任を果たすことで自らの信頼を高めること</p>
           <h2 className="value-element">尊重</h2>
            <p className="value-text">仲間を思いやり、尊重すること</p>
           <h2 className="value-element">共創</h2>
            <p className="value-text">様々な目的を共にする仲間と新しい価値観を創造し続けること</p>
           <h2 className="value-element">挑戦</h2>
            <p className="value-text">時代の流れを的確に読み、柔軟な発想力で行動すること</p>
        </div>
        <Info />
        <Contact />
      </div>
    )
  }
}
