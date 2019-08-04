import React from 'react';
import SearchBar from './SearchBar';
import DivisionInfo from './DivisionInfo';
import HeaderInfo from './HeaderInfo';


const App = ()=>{
    
    return(
        <div >
            
            {/* <LoadDiv/> */}
            <SearchBar/>
            <HeaderInfo/>
            <DivisionInfo/>
        </div>
    );
    
}

export default App;