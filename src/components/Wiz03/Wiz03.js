import React, { Component } from 'react';
import WizTracker from '../WizTracker/WizTracker';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { updateWizard } from '../../ducks/reducer';


class Wiz03 extends Component {
    constructor(props) {
        super(props)
        const { image } = this.props.wizard
        this.state = {
            image: image
        }
    }

    handleCancel() {
        axios.get('/auth/me').then(res => {
            if (res.data.username === "") { this.props.history.push('/') }
            else { this.props.history.push('/Dashboard/' + res.data.id) }
        })
    }

    handleNext() {
        let property = { ...this.props.wizard, ...this.state }
        console.log(' property ',property)
        this.props.updateWizard(property)
        this.props.history.push('/Wizard/4')
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
                                <div className='ImageTest' >
                                    <div>
                                        <img src={this.state.image} alt="Preview" />

                                    </div>
                                </div>
                                <h2>Image URL:</h2>
                                <input type="text" style={{ 'width': '400px' }}
                                    value={this.state.image}
                                    title='image'
                                    maxLength='250'
                                    onChange={(e) => { this.handleOnChange(e.target.title, e.target.value) }}
                                />
                            </div>
                            <div className="WizButtons">
                                <button onClick={() => this.props.history.goBack()}>Previous Step</button>
                                <button onClick={() => { this.handleNext() }}>Next Step </button>
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
export default connect(mapStateToProps, { updateWizard: updateWizard })(Wiz03)