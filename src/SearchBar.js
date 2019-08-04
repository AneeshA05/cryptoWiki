import React,{Component} from 'react';
import './SearchBar.css';
import $ from "jquery";
import HeaderInfo from './HeaderInfo';


class SearchBar extends Component{

   
    render(){
        return(
            <div id='personal'>
                <h1 style={{textAlign:'center',margin:20}}>Crypto Wiki</h1>
                <div className="ui input" style={{marginLeft:'450px',width:'500px'}}>
                    <input type="text" id='coin' placeholder='Enter the CryptoCurrency Name' onChange={this.func3}/>
                    <button className="ui brown button" onClick={this.func}>Info</button>
                </div>
                
            </div>
            
        );
       
    }
    
    func3=()=>{
        
            var coin_name=[];
              $.ajax({
                  url:"https://api.coingecko.com/api/v3/coins/list",
                  type:"GET",
                  async:false,
                  success:function(response){
                      console.log(response);
                  }
          
              });
          
    }
   
    
    func=()=>{
        
        var coin_name=[];
        document.getElementById("myHide").style.display="none";
        var a=document.getElementById('coin').value;
        console.log(a);
        $.ajax({
            url:'https://api.coingecko.com/api/v3/coins/'+a,
            type:'GET',
            async:false,
            
            success:function(response){
               // var b=response.description;
                console.log(response);
                var c=response.name;
                var d=response.symbol;
                var e=response.id;
               // console.log(response);
               var k = document.getElementById("coin").value;
               
                   
                    document.getElementById('header1').innerHTML=c+' - '+d;
                    document.getElementById("header1").style.height = "25px";
                    document.getElementById("header1").style.textAlign = "center";
                    document.getElementById("header1").style.marginTop='20px';
                
                // document.getElementById('header1').innerHTML=c+' - '+d;
                // document.getElementById("header1").style.height = "25px";
                // document.getElementById("header1").style.textAlign = "center";
                // document.getElementById("header1").style.marginTop='20px';

            }
        });    
    }
}

export default SearchBar;