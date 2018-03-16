import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateWizard, cancelWizard } from '../../ducks/reducer';
import logo from '../../images/header_logo.png'

class Header extends Component {

    componentDidMount() {
        axios.get('/auth/me').then(res => {
            // add user id to redux store
            let property = { ...this.props.wizard, user_id: res.data.id }
            this.props.updateWizard(property)
            if (res.data.username === "") { this.props.history.push('/') }
        })
    }

    handleLogout() {
        this.props.cancelWizard()
        axios.post('/api/auth/logout').then(res => {
            console.log('handleLogout', res.data)
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className='Header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <h1>Houser </h1>
                <div>
                    <button onClick={() => this.handleLogout()}>logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps, { updateWizard: updateWizard, cancelWizard: cancelWizard })(Header))