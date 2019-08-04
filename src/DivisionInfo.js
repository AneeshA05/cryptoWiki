import React from 'react';
const DivisionInfo=()=>{
    return(
        <div>
            <div className='container' id="myHide" style={{height:'600px'}}>
            <div style={{float:"left"}}>
            <div id='divImage' style={{background:'skyblue'}}><img id='bitImage'></img></div>
            
            <div id='header2' className='headerClass' style=
                {
                    {
                    background:'skyblue',
                    textAlign:'center',
                    fontSize:'20px',
                    //float:'left',
                    
                    }
                } 
            >
            </div>
            </div>
            <div id='header3' style=
                {
                    {
                    float:'right',
                    background:'skyblue',
                    textAlign:'center',
                    height:'650px',
                    fontSize:'20px'
                    
                    
                    }
                } 
            >
                <p id='para'></p>
            </div>
            
            </div>
        </div>
    );
}
export default DivisionInfo;