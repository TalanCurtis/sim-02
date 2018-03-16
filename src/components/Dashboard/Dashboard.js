import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
// import { addProperty } from '../../ducks/reducer';
import axios from 'axios';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: [],
            filtered: [],
            amount: 0
        }
    }
    componentDidMount() {
        console.log('this is props', this.props)
        console.log('id', this.props.match.params.id)
        axios.get('/api/properties/' + this.props.match.params.id * 1).then(res => {
            this.setState({ properties: res.data, filtered: res.data })
        })
    }

    test() {
        // console.log('hello', this.props)
        // props.addProperty({ username: 'cheese' })
        // console.log('hello', this.props)

    }
    handleFilter() {
        this.setState({filtered:this.state.properties})
        
        console.log('filter', this.state.properties)
        let newFiltered = this.state.properties.filter(x => x.desired_rent > this.state.amount)
        this.setState({filtered: newFiltered})

    }
    handleReset() {
        console.log('reset')
        this.setState({filtered:this.state.properties, amount:0})
    }

    render() {
        let properties = this.state.filtered.map((x, i) => {
            return (
                <div key={i}>
                    <Card info={x} />
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
                            <input type="number" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })} />
                            <button onClick={() => this.handleFilter()}> Filter</button>
                            <button onClick={() => this.handleReset()}> Reset</button>
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

export default connect(mapStateToProps)(Dashboard)