import React,{Component} from 'react';
import './SearchBar.css';
import $ from "jquery";
import HeaderInfo from './HeaderInfo';
import LoadDiv from './LoadDiv';


class SearchBar extends Component{

   
    render(){
        $("personal").hide();
        setTimeout(function(){
            $("personal").show();
        },4000);
        return(
            <div id='personal'>
                
                <h1 style={{textAlign:'center',margin:20}}>Crypto Wiki</h1>
                <div className="ui input" style={{marginLeft:'450px',width:'500px'}}>
                    <input type="text" id='coin' placeholder='Enter the CryptoCurrency Name'/>
                    <button className="ui brown button" onClick={this.func}>Info</button>
                </div>
                
            </div>
            
        );
    }
    
    func=()=>{
        document.getElementById("myHide").style.display="none";
        var a=document.getElementById('coin').value;
        console.log(a);
        $.ajax({
            url:'https://api.coingecko.com/api/v3/coins/'+a,
            type:'GET',
            async:false,
            
            success:function(response){
               // var b=response.description;
               // console.log(response);
                var c=response.name;
                var d=response.symbol;
               // console.log(response);
                document.getElementById('header1').innerHTML=c+' - '+d;
                document.getElementById("header1").style.height = "25px";
                document.getElementById("header1").style.textAlign = "center";
                document.getElementById("header1").style.marginTop='20px';

            }
        });    
    }
}

export default SearchBar;