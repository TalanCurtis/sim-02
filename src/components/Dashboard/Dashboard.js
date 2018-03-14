import React from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';

function Dashboard(props) {

    function test(){
        console.log('hello', props)
    }
    return (
        <div className="Dashboard">
            <Header />
            <button onClick={()=>test()}>Test</button>
        </div>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Dashboard)