import React,{Component} from 'react';
import $ from 'jquery';

class LoadDiv extends Component{
    render(){
      setTimeout(function() {
      //  $('myLoad').fadeOut('fast');
        document.getElementById('fast').fadeOut();
    }, 10000);
        return(
                <div >
                  <div id="myLoad">mydiv</div>
                </div>
        );
    }
}
export default LoadDiv;