import React from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { addProperty } from '../../ducks/reducer';

function Dashboard(props) {

    function test() {
        console.log('hello', props)
        props.addProperty({ username: 'cheese' })
        console.log('hello', props)

    }
    return (
        <div className="Dashboard">
            <Header />
            <div className='DashboardContainer'>
            <div className="Container">
                <button className='NewPropButton'> Add new property </button>
                <div>
                    <p>List of properties with "disired rent" greator than: $</p>
                    <input type="number" />
                    <button> Filter</button>
                    <button> Reset</button>
                </div>
                <div>
                    <h1> Home Listings</h1>
                    --List of homes--
                </div>

            </div>

            </div>
            <div>
                ------------------------------------
            </div>
            {props.user.username}
            {JSON.stringify(props.user.username)}
            <button onClick={() => test()}>Test</button>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addProperty: addProperty })(Dashboard)