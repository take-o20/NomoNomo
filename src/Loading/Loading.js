import React from 'react';
import ReactLoading from 'react-loading';
 import "./Loading.css"
const Loading = () => (
    <div className="loading">
      <ReactLoading type="cubes" color="#e95464"  height={'20%'} width={'20%'} className="loading-2"/>
    </div>
);
 
export default Loading;