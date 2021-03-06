import React, { Component } from 'react';
import WizTracker from '../WizTracker/WizTracker';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { updateWizard, cancelWizard } from '../../ducks/reducer';


class Wiz05 extends Component {
    constructor(props) {
        super(props)
        const { recommended_rent, desired_rent } = this.props.wizard
        this.state = {
            recommended_rent: recommended_rent,
            desired_rent: desired_rent
        }
    }

    handleCancel() {
        // console.log('Cancel')
        this.props.history.push('/Dashboard/' + this.props.wizard.user_id)
        this.props.cancelWizard()
    }

    handleComplete() {
        let recommended_rent = Math.floor(this.props.wizard.mortgage * 1.25)
        let property = { ...this.props.wizard, ...this.state, recommended_rent: recommended_rent }
        console.log(' property ', property)
        this.props.updateWizard(property)

        axios.post('/api/properties', property).then(res => {
            console.log(res.data)
            console.log(res.data[0].user_id)
            this.props.history.push('/Dashboard/' + res.data[0].user_id)
        })
        // this.props.history.push('/Dashboard/')
    }

    handlePrevious() {
        console.log('previous')
    }

    handleOnChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    test() {
        console.log('tests', this.props)
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={() => this.test()}>Test</button>
                <div className="DashboardContainer">
                    <div className='Wiz'>
                        <div>
                            <div className='WizHeader'>
                                <h2>Add New Listing</h2>
                                <button onClick={() => this.handleCancel()}>Cancel</button>
                            </div>
                            <WizTracker step={this.props.match.path.split('/').pop() * 1} />
                        </div>
                        <div className="Inputs">

                            <div>
                                <h2>Recommended Rent: ${Math.floor(this.props.wizard.mortgage * 1.25)}</h2>
                            </div>
                            <div>
                                <h2>Desired Rent:</h2>
                                <input type="number" style={{ 'width': '400px' }}
                                    value={this.state.desired_rent}
                                    title='desired_rent'
                                    maxLength='140'
                                    onChange={(e) => { this.handleOnChange(e.target.title, e.target.value) }}
                                />
                            </div>
                            <div className="WizButtons">
                                <button onClick={() => this.props.history.goBack()}>Previous Step</button>
                                <button className='Complete' onClick={() => { this.handleComplete() }}>Complete </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, { updateWizard: updateWizard, cancelWizard: cancelWizard })(Wiz05)