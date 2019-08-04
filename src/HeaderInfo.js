import React,{Component} from 'react';
import DivisionInfo from './DivisionInfo';
import $ from "jquery";

class HeaderInfo extends Component{
    render(){
       
        return(
            <div>
                 <h4 id='header1' style={{background:'grey',width:'100%',fontSize:'20px',cursor:'pointer'}} onClick={this.func1}></h4>
                 
            </div>
        );
    }

    func1=()=>{
        var x = document.getElementById("myHide");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        
        var b=document.getElementById('coin').value;
        //console.log('Hello');
        $.ajax({
            url:'https://api.coingecko.com/api/v3/coins/'+b,
            type:'GET',
            async:false,
            success:function(response){
                console.log(response);
                var des=response.description.en;
                console.log(des);
                var im=response.image.large;
                var x=response.genesis_date;
                var y=response.market_cap_rank;
                var z=response.coingecko_rank;
                var e=response.coingecko_score;
                var f=response.developer_score;
                var g=response.community_score;
                var h=response.liquidity_score;
                var i=response.public_interest_score;

                 document.getElementById("bitImage").src=im+'<br/>';
                 
                  document.getElementById("header2").innerHTML='<br/>'+'Date of Appearance' + '<br/> '+x+'<br/>'+
                                                                '<br/>'+'Market Cap Rank'+' - '+y+'<br/>'+
                                                                '<br/>'+'Coin Gecko -'+'<br/>'+'Rank - '+z+'<br/>'+'Score -'+'<br/>'+e+'<br/>'+
                                                                '<br/>'+'Developer Score -'+'<br/>'+f+'<br/>'+
                                                                '<br/>'+'Community Score -'+'<br/>'+g+'<br/>'+
                                                                '<br/>'+'Liquidity Score -'+'<br/>'+h+'<br/>'+
                                                                '<br/>'+'Public Interest Score -'+'<br/>'+i;
               
                
                
                
                document.getElementById("para").innerHTML=des;

                document.getElementById("para").style.margin='30px 20px 20px 20px';

                document.getElementById("header2").style.border="1px solid black";
                document.getElementById("header2").style.width="256px";
                document.getElementById("header2").style.height="460px";
                document.getElementById("header2").style.paddingTop="20px";

                document.getElementById("header3").style.border="1px solid black";
                document.getElementById("header3").style.width="81%";
                document.getElementById("header3").style.paddingTop="20px";

                document.getElementById("divImage").style.border="1px solid black";
                document.getElementById("divImage").style.height="190px";
                document.getElementById("divImage").style.width='256px'
               
                document.getElementById("bitImage").style.height="150px";
                document.getElementById("bitImage").style.width="150px";
                document.getElementById("bitImage").style.margin="15px 0 0 40px";
                
            
            }
        });    
    }
}
export default HeaderInfo;