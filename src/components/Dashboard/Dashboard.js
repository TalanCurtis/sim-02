import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { addProperty } from '../../ducks/reducer';
import axios from 'axios';
import Card from '../Card/Card';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
    }
    componentDidMount() {
        console.log('this is props', this.props)
        console.log('id', this.props.match.params.id)
        axios.get('/api/properties/' + this.props.match.params.id * 1).then(res => {
            this.setState({ properties: res.data })
        })
    }

    test() {
        // console.log('hello', this.props)
        // props.addProperty({ username: 'cheese' })
        // console.log('hello', this.props)

    }

    render() {
        let properties = this.state.properties.map((x, i) => {
            return (
                <div key={i}>
                    <Card info={x}/>
                </div>
            )
        })
        return (
            <div className="Dashboard">
                <Header />
                {/* {JSON.stringify(this.state)} */}
                <div className='DashboardContainer'>
                    <div className="Container">
                    <Link to='/Wizard/1'><button className='NewPropButton'> Add new property </button></Link>
                        <div>
                            <p>List of properties with "desired rent" greater than: $</p>
                            <input type="number" />
                            <button> Filter</button>
                            <button> Reset</button>
                            <h1> Home Listings</h1>
                            {properties}
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addProperty: addProperty })(Dashboard)