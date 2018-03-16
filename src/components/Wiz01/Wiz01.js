import React, { Component } from 'react';
import WizTracker from '../WizTracker/WizTracker';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { updateWizard } from '../../ducks/reducer';

class Wiz01 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.wizard.name,
            description: this.props.wizard.description
        }
    }

    handleCancel() {
        axios.get('/auth/me').then(res => {
            if (res.data.username === "") { this.props.history.push('/') }
            else { this.props.history.push('/Dashboard/' + res.data.id) }
        })
    }

    handleNext() {
        console.log('next', this.props)
        let property = {
            name: this.state.name,
            description: this.state.description
        }
        property = {...this.props.wizard, ...property}
        // console.log(' property ',property)
        this.props.updateWizard(property)
        this.props.history.push('/Wizard/2')
    }
    handlePrevious() {
        console.log('previous')
    }

    handleOnChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div>
                <Header />
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
                                <h2>Name:</h2>
                                <input type="text" style={{ 'width': '400px' }}
                                    value={this.state.name}
                                    title='name'
                                    maxLength='20'
                                    onChange={(e) => { this.handleOnChange(e.target.title, e.target.value) }}
                                />
                            </div>
                            <div>
                                <h2>Description:</h2>
                                <textarea style={{ 'height': '200px', 'width': '400px' }}
                                    value={this.state.description}
                                    title='description'
                                    maxLength='250'
                                    onChange={(e) => { this.handleOnChange(e.target.title, e.target.value) }}
                                />
                            </div>
                            <div className="WizButtons">
                                <button onClick={()=>this.handleNext()}>Next Step </button>
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
export default connect(mapStateToProps, {updateWizard: updateWizard})(Wiz01)