import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

export default class Home extends Component{
  render (){
    return ( 
      <div >
        <div>
          Hello World
        </div>
      </div>
    );
  }
}
// export default withRouter(Home);