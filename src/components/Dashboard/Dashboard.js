import React from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';
import {addProperty} from '../../ducks/reducer';

function Dashboard(props) {

    function test(){
        console.log('hello', props)
        props.addProperty({username:'cheese'})
        console.log('hello', props)

    }
    return (
        <div className="Dashboard">
            <Header />
            {props.user.username}
            {JSON.stringify(props.user.username)}
            <button onClick={()=>test()}>Test</button>
        </div>
    )
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addProperty: addProperty})(Dashboard)