import React from 'react';
import SearchBar from './SearchBar';
import DivisionInfo from './DivisionInfo';
import HeaderInfo from './HeaderInfo';
import LoadDiv from './LoadDiv';
import $ from 'jquery';

const App = ()=>{
    setTimeout(function() {
        $('myLoad').fadeOut('fast');
    }, 10000);
    return(
        <div>
            <LoadDiv/>
            <SearchBar/>
            <HeaderInfo/>
            <DivisionInfo/>
        </div>
    );

}

export default App;